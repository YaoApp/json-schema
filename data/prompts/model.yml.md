Sources: |+
    gou/model/types.go
    package model

    import (
    	"github.com/yaoapp/kun/maps"
    )

    // Relationship types
    const (
    	RelHasOne         = "hasOne"         // 1 v 1
    	RelHasMany        = "hasMany"        // 1 v n
    	RelBelongsTo      = "belongsTo"      // inverse  1 v 1 / 1 v n / n v n
    	RelHasOneThrough  = "hasOneThrough"  // 1 v 1 ( t1 <-> t2 <-> t3)
    	RelHasManyThrough = "hasManyThrough" // 1 v n ( t1 <-> t2 <-> t3)
    	RelBelongsToMany  = "belongsToMany"  // 1 v1 / 1 v n / n v n
    	RelMorphOne       = "morphOne"
    	RelMorphMany      = "morphMany"
    	RelMorphToMany    = "morphToMany"
    	RelMorphByMany    = "morphByMany"
    	RelMorphMap       = "morphMap"
    )

    // Model 数据模型
    type Model struct {
    	ID            string
    	Name          string
    	File          string
    	Driver        string // Driver
    	MetaData      MetaData
    	Columns       map[string]*Column // 字段映射表
    	ColumnNames   []interface{}      // 字段名称清单
    	PrimaryKey    string             // 主键(单一主键)
    	PrimaryKeys   []string           // 主键(联合主键)
    	UniqueColumns []*Column          // 唯一字段清单
    }

    // MetaData 元数据
    type MetaData struct {
    	Name      string              `json:"name,omitempty"`      // 元数据名称
    	Connector string              `json:"connector,omitempty"` // Bind a connector, MySQL, SQLite, Postgres, Clickhouse, Tidb, Oracle support. default is SQLite
    	Table     Table               `json:"table,omitempty"`     // 数据表选项
    	Columns   []Column            `json:"columns,omitempty"`   // 字段定义
    	Indexes   []Index             `json:"indexes,omitempty"`   // 索引定义
    	Relations map[string]Relation `json:"relations,omitempty"` // 映射关系定义
    	Values    []maps.MapStrAny    `json:"values,omitempty"`    // 初始数值
    	Option    Option              `json:"option,omitempty"`    // 元数据配置
    }

    // Column the field description struct
    type Column struct {
    	Label       string       `json:"label,omitempty"`
    	Name        string       `json:"name"`
    	Type        string       `json:"type,omitempty"`
    	Title       string       `json:"title,omitempty"`
    	Description string       `json:"description,omitempty"`
    	Comment     string       `json:"comment,omitempty"`
    	Length      int          `json:"length,omitempty"`
    	Precision   int          `json:"precision,omitempty"`
    	Scale       int          `json:"scale,omitempty"`
    	Nullable    bool         `json:"nullable,omitempty"`
    	Option      []string     `json:"option,omitempty"`
    	Default     interface{}  `json:"default,omitempty"`
    	DefaultRaw  string       `json:"default_raw,omitempty"`
    	Example     interface{}  `json:"example,omitempty"`
    	Generate    string       `json:"generate,omitempty"` // Increment, UUID,...
    	Crypt       string       `json:"crypt,omitempty"`    // AES, PASSWORD, AES-256, AES-128, PASSWORD-HASH, ...
    	Validations []Validation `json:"validations,omitempty"`
    	Index       bool         `json:"index,omitempty"`
    	Unique      bool         `json:"unique,omitempty"`
    	Primary     bool         `json:"primary,omitempty"`
    	model       *Model
    }

    // Validation the field validation struct
    type Validation struct {
    	Method  string        `json:"method"`
    	Args    []interface{} `json:"args,omitempty"`
    	Message string        `json:"message,omitempty"`
    }

    // ValidateResponse 数据校验返回结果
    type ValidateResponse struct {
    	Line     int      `json:"line,omitempty"`
    	Column   string   `json:"column,omitempty"`
    	Messages []string `json:"messages,omitempty"`
    }

    // Index the search index struct
    type Index struct {
    	Comment string   `json:"comment,omitempty"`
    	Name    string   `json:"name,omitempty"`
    	Columns []string `json:"columns,omitempty"`
    	Type    string   `json:"type,omitempty"` // primary,unique,index,match
    }

    // Table the model mapping table in DB
    type Table struct {
    	Name        string   `json:"name,omitempty"`   // optional, if not set, the default is generate from model name. eg name.space.user, table name is name_space_user
    	Prefix      string   `json:"prefix,omitempty"` // optional, the table prefix
    	Comment     string   `json:"comment,omitempty"`
    	Engine      string   `json:"engine,omitempty"` // InnoDB,MyISAM ( MySQL Only )
    	Collation   string   `json:"collation"`
    	Charset     string   `json:"charset"`
    	PrimaryKeys []string `json:"primarykeys"`
    }

    // Relation the new xun model relation
    type Relation struct {
    	Name    string     `json:"-"`
    	Type    string     `json:"type"`
    	Key     string     `json:"key,omitempty"`
    	Model   string     `json:"model,omitempty"`
    	Foreign string     `json:"foreign,omitempty"`
    	Links   []Relation `json:"links,omitempty"`
    	Query   QueryParam `json:"query,omitempty"`
    }

    // Option 模型配置选项
    type Option struct {
    	Timestamps  bool `json:"timestamps,omitempty"`   // + created_at, updated_at 字段
    	SoftDeletes bool `json:"soft_deletes,omitempty"` // + deleted_at 字段
    	Trackings   bool `json:"trackings,omitempty"`    // + created_by, updated_by, deleted_by 字段
    	Constraints bool `json:"constraints,omitempty"`  // + 约束定义
    	Permission  bool `json:"permission,omitempty"`   // + __permission 字段
    	Logging     bool `json:"logging,omitempty"`      // + __logging_id 字段
    	Readonly    bool `json:"read_only,omitempty"`    // Ignore the migrate operation
    }

    // ColumnMap ColumnMap 字段映射
    type ColumnMap struct {
    	Column *Column
    	Model  *Model
    	Export string // 取值时的变量名
    }

    // ExportData the export data struct
    type ExportData struct {
    	Model   string          `json:"model"`
    	Columns []string        `json:"columns"`
    	Values  [][]interface{} `json:"values"`
    }

    // QueryParam 数据查询器参数
    type QueryParam struct {
    	Model    string          `json:"model,omitempty"`
    	Table    string          `json:"table,omitempty"`
    	Alias    string          `json:"alias,omitempty"`
    	Export   string          `json:"export,omitempty"` // 导出前缀
    	Select   []interface{}   `json:"select,omitempty"` // string | dbal.Raw
    	Wheres   []QueryWhere    `json:"wheres,omitempty"`
    	Orders   []QueryOrder    `json:"orders,omitempty"`
    	Limit    int             `json:"limit,omitempty"`
    	Page     int             `json:"page,omitempty"`
    	PageSize int             `json:"pagesize,omitempty"`
    	Withs    map[string]With `json:"withs,omitempty"`
    }

    // With relations 关联查询
    type With struct {
    	Name  string     `json:"name"`
    	Query QueryParam `json:"query,omitempty"`
    }

    // QueryWhere Where 查询条件
    type QueryWhere struct {
    	Rel    string       `json:"rel,omitempty"` // Relation Name
    	Column interface{}  `json:"column,omitempty"`
    	Value  interface{}  `json:"value,omitempty"`
    	Method string       `json:"method,omitempty"` // where,orwhere, wherein, orwherein...
    	OP     string       `json:"op,omitempty"`     // 操作 eq/gt/lt/ge/le/like...
    	Wheres []QueryWhere `json:"wheres,omitempty"` // 分组查询
    }

    // QueryOrder Order 查询排序
    type QueryOrder struct {
    	Rel    string `json:"rel,omitempty"` // Relation Name
    	Column string `json:"column"`
    	Option string `json:"option,omitempty"` // desc, asc
    }

    // Encryptor 加密器
    type Encryptor struct {
    	Name   string `json:"-"`                // 名称
    	Salt   string `json:"salt,omitempty"`   // 盐
    	Key    string `json:"key,omitempty"`    // 钥匙
    	Secret string `json:"secret,omitempty"` // 密钥
    }

    // IEncryptor 加密器接口
    type IEncryptor interface {
    	Set(crypt *Encryptor)
    	Encode(value string) (string, error)
    	Decode(value string) (string, error)
    	Validate(hash string, value string) bool
    }

    gou/model/model.go
    package model

    import (
    	"fmt"
    	"strings"
    	"sync"

    	"github.com/yaoapp/gou/application"
    	"github.com/yaoapp/kun/exception"
    	"github.com/yaoapp/kun/log"
    	"github.com/yaoapp/kun/maps"
    	"github.com/yaoapp/xun/capsule"
    )

    // Models 已载入模型
    var Models = map[string]*Model{}
    var lock sync.Mutex

    // LoadSync load model sync
    func LoadSync(file string, id string) (*Model, error) {
    	lock.Lock()
    	defer lock.Unlock()
    	return Load(file, id)
    }

    // LoadSourceSync load model sync
    func LoadSourceSync(source []byte, id string, file string) (*Model, error) {
    	lock.Lock()
    	defer lock.Unlock()
    	return LoadSource(source, id, "")
    }

    // Load load model
    func Load(file string, id string) (*Model, error) {
    	data, err := application.App.Read(file)
    	if err != nil {
    		return nil, err
    	}
    	return LoadSource(data, id, file)
    }

    // LoadSource load model from source
    func LoadSource(source []byte, id string, file string) (*Model, error) {

    	if file == "" {
    		file = fmt.Sprintf("__source.%s.mod.yao", id)
    	}

    	metadata := MetaData{}
    	err := application.Parse(file, source, &metadata)
    	if err != nil {
    		exception.Err(err, 400).Throw()
    	}

    	mod := &Model{
    		ID:       id,
    		Name:     id,
    		File:     file,
    		MetaData: metadata,
    	}

    	// 解析常用数值
    	columns := map[string]*Column{} // 字段映射表
    	columnNames := []interface{}{}  // 字段名称清单
    	PrimaryKey := "id"              // 字段主键
    	uniqueColumns := []*Column{}    // 唯一字段清单

    	// 补充字段(软删除)
    	if mod.MetaData.Option.SoftDeletes {
    		mod.MetaData.Columns = append(mod.MetaData.Columns, Column{
    			Label:    "::Delete At",
    			Name:     "deleted_at",
    			Type:     "timestamp",
    			Comment:  "::Delete At",
    			Nullable: true,
    		})
    	}

    	// 补充时间戳(软删除)
    	if mod.MetaData.Option.Timestamps {
    		mod.MetaData.Columns = append(mod.MetaData.Columns,
    			Column{
    				Label:    "::Created At",
    				Name:     "created_at",
    				Type:     "timestamp",
    				Comment:  "::Created At",
    				Nullable: true,
    			},
    			Column{
    				Label:    "::Updated At",
    				Name:     "updated_at",
    				Type:     "timestamp",
    				Comment:  "::Updated At",
    				Nullable: true,
    			},
    		)
    	}

    	for i, column := range mod.MetaData.Columns {
    		mod.MetaData.Columns[i].model = mod // 链接所属模型
    		columns[column.Name] = &mod.MetaData.Columns[i]
    		columnNames = append(columnNames, column.Name)
    		if strings.ToLower(column.Type) == "id" || column.Primary == true {
    			PrimaryKey = column.Name
    		}

    		// 唯一字段
    		if column.Unique || column.Primary {
    			uniqueColumns = append(uniqueColumns, columns[column.Name])
    		}
    	}

    	// 唯一索引
    	for _, index := range mod.MetaData.Indexes {
    		if strings.ToLower(index.Type) == "unique" {
    			for _, name := range index.Columns {
    				col, has := columns[name]
    				if has {
    					uniqueColumns = append(uniqueColumns, col)
    				}
    			}
    		} else if strings.ToLower(index.Type) == "primary" {
    			for _, name := range index.Columns {
    				col, has := columns[name]
    				if has {
    					PrimaryKey = col.Name
    					uniqueColumns = append(uniqueColumns, col)
    				}
    			}
    		}
    	}

    	mod.Columns = columns
    	mod.ColumnNames = columnNames
    	mod.PrimaryKey = PrimaryKey
    	mod.UniqueColumns = uniqueColumns

    	if capsule.Global != nil {
    		mod.Driver = capsule.Schema().MustGetConnection().Config.Driver
    	}

    	Models[id] = mod
    	return mod, nil
    }

    // Reload 更新模型
    func (mod *Model) Reload() (*Model, error) {
    	new, err := LoadSync(mod.File, mod.ID)
    	if err != nil {
    		return nil, err
    	}
    	*mod = *new
    	return mod, nil
    }

    // Migrate 数据迁移
    func (mod *Model) Migrate(force bool, opts ...MigrateOption) error {
    	options := &MigrateOptions{}
    	for _, opt := range opts {
    		opt(options)
    	}
    	if force {
    		err := mod.DropTable()
    		if err != nil {
    			return err
    		}
    	}

    	has, err := mod.HasTable()
    	if err != nil {
    		return err
    	}

    	if !has {
    		err := mod.CreateTable()
    		if err != nil {
    			return err
    		}

    		if !options.DonotInsertValues {
    			_, errs := mod.InsertValues()
    			if errs != nil && len(errs) > 0 {
    				for _, err := range errs {
    					log.Error("[Migrate] %s", err.Error())
    				}
    				return fmt.Errorf("%d values error, please check the logs", len(errs))
    			}
    		}
    		return nil
    	}

    	return mod.SaveTable()
    }

    type MigrateOptions struct {
    	DonotInsertValues bool `json:"donot_insert_values"`
    }

    type MigrateOption func(*MigrateOptions)

    func WithDonotInsertValues(v bool) MigrateOption {
    	return func(mo *MigrateOptions) {
    		mo.DonotInsertValues = v
    	}
    }

    // Select 读取已加载模型
    func Select(id string) *Model {
    	mod, has := Models[id]
    	if !has {
    		exception.New(
    			fmt.Sprintf("Model:%s; not found", id),
    			400,
    		).Throw()
    	}
    	return mod
    }

    // Exists Check if the model is loaded
    func Exists(id string) bool {
    	_, has := Models[id]
    	return has
    }

    // Read read the model dsl
    func Read(id string) MetaData {
    	return Select(id).MetaData
    }

    // Validate 数值校验
    func (mod *Model) Validate(row maps.MapStrAny) []ValidateResponse {
    	res := []ValidateResponse{}
    	for name, value := range row {
    		column, has := mod.Columns[name]
    		if !has {
    			continue
    		}

    		// 如果允许为 null
    		if value == nil && column.Nullable {
    			continue
    		}

    		success, messages := column.Validate(value, row)
    		if !success {
    			res = append(res, ValidateResponse{
    				Column:   column.Name,
    				Messages: messages,
    			})
    		}
    	}
    	return res
    }

    gou/model/atomic.go
    package model

    import (
    	"fmt"
    	"strings"
    	"time"

    	"github.com/yaoapp/kun/exception"
    	"github.com/yaoapp/kun/log"
    	"github.com/yaoapp/kun/maps"
    	"github.com/yaoapp/xun/capsule"
    	"github.com/yaoapp/xun/dbal"
    )

    // Find 查询单条记录
    func (mod *Model) Find(id interface{}, param QueryParam) (maps.MapStr, error) {
    	param.Model = mod.Name
    	param.Wheres = []QueryWhere{
    		{
    			Column: mod.PrimaryKey,
    			Value:  id,
    		},
    	}
    	param.Limit = 1
    	stack := NewQueryStack(param)
    	res := stack.Run()
    	if len(res) <= 0 {
    		return nil, fmt.Errorf("ID=%v的数据不存在", id)
    	}
    	return res[0], nil
    }

    // MustFind 查询单条记录
    func (mod *Model) MustFind(id interface{}, param QueryParam) maps.MapStr {
    	res, err := mod.Find(id, param)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return res
    }

    // Get 按条件查询, 不分页
    func (mod *Model) Get(param QueryParam) ([]maps.MapStr, error) {
    	param.Model = mod.Name
    	stack := NewQueryStack(param)
    	res := stack.Run()
    	return res, nil
    }

    // MustGet 按条件查询, 不分页, 失败抛出异常
    func (mod *Model) MustGet(param QueryParam) []maps.MapStr {
    	res, err := mod.Get(param)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return res
    }

    // Paginate 按条件查询, 分页
    func (mod *Model) Paginate(param QueryParam, page int, pagesize int) (maps.MapStr, error) {
    	param.Model = mod.Name
    	stack := NewQueryStack(param)
    	res := stack.Paginate(page, pagesize)
    	return res, nil
    }

    // MustPaginate 按条件查询, 分页, 失败抛出异常
    func (mod *Model) MustPaginate(param QueryParam, page int, pagesize int) maps.MapStr {
    	res, err := mod.Paginate(param, page, pagesize)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return res
    }

    // Create 创建单条数据, 返回新创建数据ID
    func (mod *Model) Create(row maps.MapStrAny) (int, error) {

    	errs := mod.Validate(row) // 输入数据校验
    	if len(errs) > 0 {
    		msgs := []string{}
    		for _, err := range errs {
    			msgs = append(msgs, err.Column, strings.Join(err.Messages, ","))
    			log.Error("[Model] %s Create %v", mod.ID, err)
    		}
    		exception.New("%s", 400, strings.Join(msgs, ";")).Ctx(errs).Throw()
    	}

    	mod.FliterIn(row) // 入库前输入数据预处理

    	if mod.MetaData.Option.Timestamps {
    		row.Set("created_at", dbal.Raw("CURRENT_TIMESTAMP"))
    	}

    	id, err := capsule.Query().
    		Table(mod.MetaData.Table.Name).
    		InsertGetID(row)

    	if err != nil {
    		return 0, err
    	}

    	return int(id), err
    }

    // MustCreate 创建单条数据, 返回新创建数据ID, 失败抛出异常
    func (mod *Model) MustCreate(row maps.MapStrAny) int {
    	id, err := mod.Create(row)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return id
    }

    // Update 更新单条数据
    func (mod *Model) Update(id interface{}, row maps.MapStrAny) error {

    	errs := mod.Validate(row) // 输入数据校验
    	if len(errs) > 0 {
    		msgs := []string{}
    		for _, err := range errs {
    			msgs = append(msgs, err.Column, strings.Join(err.Messages, ","))
    			log.Error("[Model] %s Update %v", mod.ID, err)
    		}
    		exception.New("%s", 400, strings.Join(msgs, ";")).Ctx(errs).Throw()
    	}

    	mod.FliterIn(row) // 入库前输入数据预处理

    	if mod.MetaData.Option.Timestamps {
    		row.Set("updated_at", dbal.Raw("CURRENT_TIMESTAMP"))
    	}

    	effect, err := capsule.Query().
    		Table(mod.MetaData.Table.Name).
    		Where(mod.PrimaryKey, id).
    		Limit(1).
    		Update(row)

    	if effect == 0 {
    		return fmt.Errorf("没有数据被更新")
    	}

    	return err
    }

    // MustUpdate 更新单条数据, 失败抛出异常
    func (mod *Model) MustUpdate(id interface{}, row maps.MapStrAny) {
    	err := mod.Update(id, row)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    }

    // Save 保存单条数据, 不存在创建记录, 存在更新记录,  返回数据ID
    func (mod *Model) Save(row maps.MapStrAny) (interface{}, error) {

    	errs := mod.Validate(row) // 输入数据校验
    	if len(errs) > 0 {
    		msgs := []string{}
    		for _, err := range errs {
    			msgs = append(msgs, err.Column, strings.Join(err.Messages, ","))
    			log.Error("[Model] %s Save %v", mod.ID, err)
    		}
    		exception.New("%s", 400, strings.Join(msgs, ";")).Ctx(errs).Throw()
    	}

    	mod.FliterIn(row) // 入库前输入数据预处理

    	// 更新
    	if row.Has(mod.PrimaryKey) {

    		if mod.MetaData.Option.Timestamps {
    			row.Set("updated_at", dbal.Raw("CURRENT_TIMESTAMP"))
    			row.Del("deleted_at") // 忽略删除字段
    			row.Del("created_at") // 忽略创建字段
    		}

    		id := row.Get(mod.PrimaryKey)
    		_, err := capsule.Query().
    			Table(mod.MetaData.Table.Name).
    			Where(mod.PrimaryKey, id).
    			Limit(1).
    			Update(row)

    		if err != nil {
    			return 0, err
    		}

    		return id, nil
    	}

    	// 创建
    	if mod.MetaData.Option.Timestamps {
    		row.Set("created_at", dbal.Raw("CURRENT_TIMESTAMP"))
    		row.Del("deleted_at") // 忽略删除字段
    		row.Del("updated_at") // 忽略更新字段
    	}

    	id, err := capsule.Query().
    		Table(mod.MetaData.Table.Name).
    		InsertGetID(row)

    	if err != nil {
    		return 0, err
    	}

    	return id, err
    }

    // MustSave 保存单条数据, 返回数据ID, 失败抛出异常
    func (mod *Model) MustSave(row maps.MapStrAny) interface{} {
    	id, err := mod.Save(row)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return id
    }

    // Delete 删除单条记录
    func (mod *Model) Delete(id interface{}) error {
    	_, err := mod.DeleteWhere(QueryParam{
    		Wheres: []QueryWhere{
    			{
    				Column: mod.PrimaryKey,
    				Value:  id,
    			},
    		},
    		Limit: 1,
    	})
    	return err
    }

    // MustDelete 删除单条记录, 失败抛出异常
    func (mod *Model) MustDelete(id interface{}) {
    	err := mod.Delete(id)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    }

    // Destroy 真删除单条记录
    func (mod *Model) Destroy(id interface{}) error {
    	_, err := capsule.Query().Table(mod.MetaData.Table.Name).Where(mod.PrimaryKey, id).Limit(1).Delete()
    	return err
    }

    // MustDestroy 真删除单条记录, 失败抛出异常
    func (mod *Model) MustDestroy(id interface{}) {
    	err := mod.Destroy(id)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    }

    // Insert 插入多条数据
    func (mod *Model) Insert(columns []string, rows [][]interface{}) error {

    	// 数据校验
    	errs := []ValidateResponse{}
    	columnCnt := len(columns)
    	for rid, values := range rows {

    		if len(values) != columnCnt {
    			errs = append(errs, ValidateResponse{
    				Line:     rid,
    				Column:   "*",
    				Messages: []string{fmt.Sprintf("第%d条数据，字段数量与提供字段清单不符.", rid+1)},
    			})
    		}

    		row := maps.MakeMapStr()
    		for cid, name := range columns {
    			row[name] = values[cid]
    		}

    		rowerrs := mod.Validate(row) // 输入数据校验
    		if len(rowerrs) > 0 {
    			for _, err := range rowerrs {
    				err.Line = rid
    				errs = append(errs, err)
    			}
    		}

    		// 入库前输入数据预处理
    		mod.FliterIn(row)
    		values := []interface{}{}
    		for _, name := range columns {
    			values = append(values, row[name])
    		}
    		rows[rid] = values
    	}

    	if len(errs) > 0 {
    		for _, err := range errs {
    			log.Error("[Model] %s Insert %v", mod.ID, err)
    		}
    		exception.New("%v", 400, errs).Ctx(errs).Throw()
    	}

    	// 添加创建时间戳
    	if mod.MetaData.Option.Timestamps {
    		columns = append(columns, "created_at")
    		for i := range rows {
    			rows[i] = append(rows[i], dbal.Raw("CURRENT_TIMESTAMP"))
    		}
    	}

    	// 写入到数据库
    	return capsule.Query().
    		Table(mod.MetaData.Table.Name).
    		Insert(rows, columns)

    }

    // MustInsert 插入多条数据, 失败抛出异常
    func (mod *Model) MustInsert(columns []string, rows [][]interface{}) {
    	err := mod.Insert(columns, rows)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    }

    // UpdateWhere 按条件更新记录, 返回更新行数
    func (mod *Model) UpdateWhere(param QueryParam, row maps.MapStrAny) (int, error) {

    	errs := mod.Validate(row) // 输入数据校验
    	if len(errs) > 0 {
    		msgs := []string{}
    		for _, err := range errs {
    			msgs = append(msgs, err.Column, strings.Join(err.Messages, ","))
    			log.Error("[Model] %s UpdateWhere %v", mod.ID, err)
    		}
    		exception.New("%s", 400, strings.Join(msgs, ";")).Ctx(errs).Throw()
    	}

    	mod.FliterIn(row) // 入库前输入数据预处理

    	if mod.MetaData.Option.Timestamps {
    		row.Set("updated_at", dbal.Raw("CURRENT_TIMESTAMP"))
    	}

    	// 如果不是 SQLite3 添加字段
    	if mod.Driver != "sqlite3" {
    		for name, value := range row {
    			if !strings.Contains(name, ".") {
    				new := fmt.Sprintf("%s.%s", mod.MetaData.Table.Name, name)
    				row.Set(new, value)
    				row.Del(name)
    			}
    		}
    	}

    	param.Model = mod.Name
    	stack := NewQueryStack(param)
    	qb := stack.FirstQuery()
    	effect, err := qb.Update(row)
    	if err != nil {
    		return 0, err
    	}

    	return int(effect), err
    }

    // MustUpdateWhere 按条件更新记录, 返回更新行数, 失败抛出异常
    func (mod *Model) MustUpdateWhere(param QueryParam, row maps.MapStrAny) int {
    	effect, err := mod.UpdateWhere(param, row)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return effect
    }

    // DeleteWhere 批量删除数据, 返回更新行数
    func (mod *Model) DeleteWhere(param QueryParam) (int, error) {

    	// 软删除
    	if mod.MetaData.Option.SoftDeletes {

    		// 兼容 SQLite3
    		if mod.Driver == "sqlite3" {
    			return mod.sqlite3DeleteWhere(param)
    		}

    		data := maps.MapStrAny{}
    		columns := []string{}
    		for _, col := range mod.UniqueColumns {
    			typ := strings.ToLower(col.Type)
    			if typ == "string" {
    				data[col.Name] = dbal.Raw(fmt.Sprintf("CONCAT_WS('_', '%d')", time.Now().UnixNano()))
    				columns = append(
    					columns,
    					fmt.Sprintf("CONCAT('\"%s\":\"', `%s`, '\"')", col.Name, col.Name),
    				)
    			} else { // 数字, 布尔型等
    				columns = append(
    					columns,
    					fmt.Sprintf("CONCAT('\"%s\":', `%s`)", col.Name, col.Name),
    				)
    			}
    			if col.Nullable {
    				data[col.Name] = nil
    			}
    		}

    		param.Model = mod.Name
    		stack := NewQueryStack(param)
    		qb := stack.FirstQuery()

    		// 备份唯一数据
    		if len(columns) > 0 {
    			restore := dbal.Raw("CONCAT('{'," + strings.Join(columns, ",',',") + ",'}')")
    			_, err := qb.Update(maps.MapStr{"__restore_data": restore})
    			if err != nil {
    				return 0, err
    			}
    		}

    		// 删除数据
    		field := fmt.Sprintf("%s.%s", mod.MetaData.Table.Name, "deleted_at")
    		// data["deleted_at"] = dbal.Raw("CURRENT_TIMESTAMP")
    		data[field] = dbal.Raw("CURRENT_TIMESTAMP")
    		effect, err := qb.Update(data)
    		if err != nil {
    			return 0, err
    		}
    		return int(effect), nil
    	}

    	return mod.DestroyWhere(param)
    }

    // sqliteDeleteWhere SQLite
    func (mod *Model) sqlite3DeleteWhere(param QueryParam) (int, error) {
    	data := maps.MapStrAny{}
    	param.Model = mod.Name
    	stack := NewQueryStack(param)
    	qb := stack.FirstQuery()

    	// 删除数据
    	// field := fmt.Sprintf("%s.%s", mod.MetaData.Table.Name, "deleted_at")
    	// data[field] = dbal.Raw("CURRENT_TIMESTAMP")
    	data["deleted_at"] = dbal.Raw("CURRENT_TIMESTAMP")
    	for _, col := range mod.UniqueColumns {
    		typ := strings.ToLower(col.Type)
    		if typ == "string" {
    			data[col.Name] = dbal.Raw(fmt.Sprintf("'_' ||  %s  || '%d'", col.Name, time.Now().UnixNano()))
    		}
    	}

    	effect, err := qb.Update(data)
    	if err != nil {
    		return 0, err
    	}
    	return int(effect), nil
    }

    // MustDeleteWhere 批量删除数据, 返回更新行数, 失败抛出异常
    func (mod *Model) MustDeleteWhere(param QueryParam) int {
    	effect, err := mod.DeleteWhere(param)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return effect
    }

    // DestroyWhere 批量真删除数据, 返回更新行数
    func (mod *Model) DestroyWhere(param QueryParam) (int, error) {
    	param.Model = mod.Name
    	qb := capsule.Query().Table(mod.MetaData.Table.Name)
    	for _, where := range param.Wheres {
    		param.Where(where, qb, mod)
    	}
    	effect, err := qb.Delete()
    	if err != nil {
    		return 0, err
    	}
    	return int(effect), nil
    }

    // MustDestroyWhere 批量真删除数据, 返回更新行数, 失败抛出异常
    func (mod *Model) MustDestroyWhere(param QueryParam) int {
    	effect, err := mod.DestroyWhere(param)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return effect
    }

    // EachSave 批量保存数据, 返回数据ID集合
    func (mod *Model) EachSave(rows []map[string]interface{}, eachrow ...maps.MapStrAny) ([]interface{}, error) {
    	messages := []string{}
    	ids := []interface{}{}
    	for i, row := range rows {

    		if len(eachrow) > 0 {
    			for k, v := range eachrow[0] {
    				if v == "$index" {
    					row[k] = i
    				} else {
    					row[k] = v
    				}
    			}
    		}

    		// check primary
    		if id, has := row[mod.PrimaryKey]; has {
    			_, err := mod.Find(id, QueryParam{Select: []interface{}{mod.PrimaryKey}})
    			if err != nil { // id does not exists & create
    				_, err := mod.Create(row)
    				if err != nil {
    					messages = append(messages, fmt.Sprintf("rows[%d]: %s", i, err.Error()))
    					continue
    				}
    				ids = append(ids, id)
    				continue
    			}
    		}

    		id, err := mod.Save(row)
    		if err != nil {
    			messages = append(messages, fmt.Sprintf("rows[%d]: %s", i, err.Error()))
    			continue
    		}
    		ids = append(ids, id)
    	}

    	if len(messages) > 0 {
    		return ids, fmt.Errorf("%s", messages)
    	}
    	return ids, nil
    }

    // MustEachSave 批量保存数据, 返回数据ID集合, 失败抛出异常
    func (mod *Model) MustEachSave(rows []map[string]interface{}, eachrow ...maps.MapStrAny) []interface{} {
    	ids, err := mod.EachSave(rows, eachrow...)
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return ids
    }

    gou/model/process.go
    package model

    import (
    	"fmt"

    	"github.com/yaoapp/gou/process"
    	"github.com/yaoapp/kun/any"
    	"github.com/yaoapp/kun/exception"
    	"github.com/yaoapp/kun/maps"
    	"github.com/yaoapp/kun/str"
    )

    // ModelHandlers 模型运行器
    var ModelHandlers = map[string]process.Handler{
    	"find":                processFind,
    	"get":                 processGet,
    	"paginate":            processPaginate,
    	"selectoption":        processSelectOption,
    	"create":              processCreate,
    	"update":              processUpdate,
    	"save":                processSave,
    	"delete":              processDelete,
    	"destroy":             processDestroy,
    	"insert":              processInsert,
    	"updatewhere":         processUpdateWhere,
    	"deletewhere":         processDeleteWhere,
    	"destroywhere":        processDestroyWhere,
    	"eachsave":            processEachSave,
    	"eachsaveafterdelete": processEachSaveAfterDelete,
    	"migrate":             processMigrate,
    	"load":                processLoad,
    	"reload":              processReload,
    	"read":                processRead,
    	"exists":              processExists,
    }

    func init() {
    	process.RegisterGroup("models", ModelHandlers)
    }

    // processFind 运行模型 MustFind
    func processFind(process *process.Process) interface{} {
    	process.ValidateArgNums(2)
    	mod := Select(process.ID)
    	params, ok := AnyToQueryParam(process.Args[1])
    	if !ok {
    		params = QueryParam{}
    	}
    	return mod.MustFind(process.Args[0], params)
    }

    // processGet 运行模型 MustGet
    func processGet(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	mod := Select(process.ID)
    	params, ok := AnyToQueryParam(process.Args[0])
    	if !ok {
    		exception.New("第1个查询参数错误 %v", 400, process.Args[0]).Throw()
    	}
    	return mod.MustGet(params)
    }

    // processPaginate 运行模型 MustPaginate
    func processPaginate(process *process.Process) interface{} {
    	process.ValidateArgNums(3)
    	mod := Select(process.ID)
    	params, ok := AnyToQueryParam(process.Args[0])
    	if !ok {
    		exception.New("第1个查询参数错误 %v", 400, process.Args[0]).Throw()
    	}

    	page := any.Of(process.Args[1]).CInt()
    	pagesize := any.Of(process.Args[2]).CInt()
    	return mod.MustPaginate(params, page, pagesize)
    }

    // processCreate 运行模型 MustCreate
    func processCreate(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	mod := Select(process.ID)
    	row := any.Of(process.Args[0]).Map().MapStrAny
    	return mod.MustCreate(row)
    }

    // processUpdate 运行模型 MustUpdate
    func processUpdate(process *process.Process) interface{} {
    	process.ValidateArgNums(2)
    	mod := Select(process.ID)
    	id := process.Args[0]
    	row := any.Of(process.Args[1]).Map().MapStrAny
    	mod.MustUpdate(id, row)
    	return nil
    }

    // processSave 运行模型 MustSave
    func processSave(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	mod := Select(process.ID)
    	row := any.Of(process.Args[0]).Map().MapStrAny
    	return mod.MustSave(row)
    }

    // processDelete 运行模型 MustDelete
    func processDelete(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	mod := Select(process.ID)
    	mod.MustDelete(process.Args[0])
    	return nil
    }

    // processDestroy 运行模型 MustDestroy
    func processDestroy(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	mod := Select(process.ID)
    	mod.MustDestroy(process.Args[0])
    	return nil
    }

    // processInsert 运行模型 MustInsert
    func processInsert(process *process.Process) interface{} {
    	process.ValidateArgNums(2)
    	mod := Select(process.ID)
    	var colums = []string{}
    	colums, ok := process.Args[0].([]string)
    	if !ok {
    		anyColums, ok := process.Args[0].([]interface{})
    		if !ok {
    			exception.New("第1个查询参数错误 %v", 400, process.Args[0]).Throw()
    		}
    		for _, col := range anyColums {
    			colums = append(colums, string(str.Of(col)))
    		}
    	}

    	var rows = [][]interface{}{}
    	rows, ok = process.Args[1].([][]interface{})
    	if !ok {
    		anyRows, ok := process.Args[1].([]interface{})
    		if !ok {
    			exception.New("第2个查询参数错误 %v", 400, process.Args[1]).Throw()
    		}
    		for _, anyRow := range anyRows {

    			row, ok := anyRow.([]interface{})
    			if !ok {
    				exception.New("第2个查询参数错误 %v", 400, process.Args[1]).Throw()
    			}
    			rows = append(rows, row)
    		}
    	}

    	mod.MustInsert(colums, rows)
    	return nil
    }

    // processUpdateWhere 运行模型 MustUpdateWhere
    func processUpdateWhere(process *process.Process) interface{} {
    	process.ValidateArgNums(2)
    	mod := Select(process.ID)
    	params, ok := AnyToQueryParam(process.Args[0])
    	if !ok {
    		exception.New("第1个查询参数错误 %v", 400, process.Args[0]).Throw()
    	}
    	row := any.Of(process.Args[1]).Map().MapStrAny
    	return mod.MustUpdateWhere(params, row)
    }

    // processDeleteWhere 运行模型 MustDeleteWhere
    func processDeleteWhere(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	mod := Select(process.ID)
    	params, ok := AnyToQueryParam(process.Args[0])
    	if !ok {
    		params = QueryParam{}
    	}
    	return mod.MustDeleteWhere(params)
    }

    // processDestroyWhere 运行模型 MustDestroyWhere
    func processDestroyWhere(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	mod := Select(process.ID)
    	params, ok := AnyToQueryParam(process.Args[0])
    	if !ok {
    		params = QueryParam{}
    	}
    	return mod.MustDestroyWhere(params)
    }

    // processEachSave 运行模型 MustEachSave
    func processEachSave(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	mod := Select(process.ID)
    	rows := process.ArgsRecords(0)
    	eachrow := map[string]interface{}{}
    	if process.NumOfArgsIs(2) {
    		eachrow = process.ArgsMap(1)
    	}
    	return mod.MustEachSave(rows, eachrow)
    }

    // processEachSaveAfterDelete 运行模型 MustDeleteWhere 后 MustEachSave
    func processEachSaveAfterDelete(process *process.Process) interface{} {
    	process.ValidateArgNums(2)
    	mod := Select(process.ID)
    	eachrow := map[string]interface{}{}
    	ids := []int{}
    	if v, ok := process.Args[0].([]int); ok {
    		ids = v
    	} else if v, ok := process.Args[0].([]interface{}); ok {
    		for _, i := range v {
    			ids = append(ids, any.Of(i).CInt())
    		}
    	}
    	rows := process.ArgsRecords(1)
    	if process.NumOfArgsIs(3) {
    		eachrow = process.ArgsMap(2)
    	}
    	if len(ids) > 0 {
    		mod.MustDeleteWhere(QueryParam{Wheres: []QueryWhere{{Column: "id", OP: "in", Value: ids}}})
    	}
    	return mod.MustEachSave(rows, eachrow)
    }

    // processSelectOption 运行模型 MustGet
    func processSelectOption(process *process.Process) interface{} {
    	mod := Select(process.ID)
    	keyword := "%%"
    	if process.NumOfArgs() > 0 {
    		keyword = fmt.Sprintf("%%%s%%", process.ArgsString(0))
    	}
    	name := "name"
    	if process.NumOfArgs() > 1 && process.ArgsString(1, "name") != "" {
    		name = process.ArgsString(1, "name")
    	}

    	value := "id"
    	if process.NumOfArgs() > 2 && process.ArgsString(2, "id") != "" {
    		value = process.ArgsString(2, "id")
    	}

    	limit := 20
    	if process.NumOfArgs() > 3 && process.ArgsInt(3, 20) > 0 {
    		limit = process.ArgsInt(3)
    	}

    	query := QueryParam{
    		Select: []interface{}{name, value},
    		Wheres: []QueryWhere{
    			{Column: name, OP: "like", Value: keyword},
    		},
    		Limit: limit,
    	}

    	data := mod.MustGet(query)
    	res := []maps.StrAny{}
    	for _, row := range data {
    		new := maps.StrAny{
    			"name": row.Get(name),
    			"id":   row.Get(value),
    		}
    		res = append(res, new)
    	}

    	return res
    }

    // processMigrate migrate model
    func processMigrate(process *process.Process) interface{} {
    	mod := Select(process.ID)
    	if process.NumOfArgs() > 0 {
    		return mod.Migrate(process.ArgsBool(0))
    	}
    	return mod.Migrate(false)
    }

    // processLoad load model
    func processLoad(process *process.Process) interface{} {
    	process.ValidateArgNums(1)
    	id := process.ID
    	file := process.ArgsString(0)
    	if process.NumOfArgs() > 1 {
    		source := process.ArgsString(1)
    		_, err := LoadSourceSync([]byte(source), id, file)
    		return err
    	}
    	_, err := LoadSync(file, id)
    	return err
    }

    func processReload(process *process.Process) interface{} {
    	mod := Select(process.ID)
    	_, err := mod.Reload()
    	if err != nil {
    		exception.Err(err, 500).Throw()
    	}
    	return nil
    }

    // processRead read the model dsl
    func processRead(process *process.Process) interface{} {
    	return Read(process.ID)
    }

    // processExists Check if the model is loaded
    func processExists(process *process.Process) interface{} {
    	return Exists(process.ID)
    }

TypeScript Template: |
    {{[ CODE BEGIN ]}}
    type QueryParam = {
      model?: string; // optional
      table?: string; // optional
      alias?: string; // optional
      export?: string; // optional, export prefix
      select?: (string | Raw)[]; // array of strings or Raw type
      wheres?: QueryWhere[]; // array of QueryWhere objects
      orders?: QueryOrder[]; // array of QueryOrder objects
      limit?: number; // optional
      page?: number; // optional
      pageSize?: number; // optional
      withs?: Record<string, With>; // optional, key-value pairs of With
    }
    ....

    /**
    * Find a record by id
    * @param type models.**WidgetID**.Find
    * @param id string | number  record id
    * @param query query parameters
    */
    export declare function Process(
      type: `models.${string}.Find`,
      id: string | number,
      query: QueryParam
    ): Record<string, any>;
    ...
    {{[ CODE END ]}}
requirements: |
    **Objective:**

    Analyze the provided Golang code to generate a comprehensive TypeScript definition file. The focus should be on interpreting the logic within the Golang code, rather than just the function signatures.

    **Requirements:**

    1. **Golang Code Analysis:**
      - Analyze the logic of the Golang code in the specified files.
      - Extract relevant data types and structures from the Golang code to inform the TypeScript definitions.

    2. **TypeScript Definition File:**
      - Define TypeScript types and interfaces that correspond to the Golang structures and logic.
      - Each process function found in `process.go` and its related types must be defined in TypeScript.

    3. **Function Naming:**
      - All process functions should be named as `Process` in the TypeScript file.

    4. **Code Block Identification:**
      - Use `{{[ CODE BEGIN ]}}` and `{{[ CODE END ]}}` comments to clearly identify the boundaries of the code block within the output. These markers must remain in the final TypeScript file.

    5. **Function Extraction:**
      - Return the complete definitions of all functions in the `gou/model/process.go` file.
      - Each type or interface used in the function should be defined in the TypeScript file.

    6. **Function Comments:**
      - Must include the function comments in the TypeScript definitions.
      - The Type structure or Interface which is used in the function , each field should have a comment.

    7. **Export**
      - Each function and type should be exported.
