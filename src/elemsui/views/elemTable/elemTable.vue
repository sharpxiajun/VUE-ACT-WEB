<template>
  <section>


    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">

      <el-form :inline="true" :model="filters" ref="filters">
        <el-form-item label="编号" prop = "idcIdQuery">
          <el-input v-model="filters.idcIdQuery" placeholder="编号"></el-input>
        </el-form-item>

        <el-form-item label="名称"  prop = "idcNameQuery">
          <el-input v-model="filters.idcNameQuery" placeholder="名称"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" v-on:click="getIrcsList" :disabled="menuPurview.query" size="small"><i class="fa fa-search fa-lg"></i> 查询</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" v-on:click="handleSenior" :disabled="menuPurview.query" size="small"><i class="fa fa-search fa-lg"></i>  高级</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="success" v-on:click="handleReset('filters')" :disabled="menuPurview.query" size="small"><i class="fa fa-refresh fa-lg"></i> 重置</el-button>
        </el-form-item>

      </el-form>



      <!--高级查询界面-->
      <el-dialog title="高级查询" v-model="seniorVisible" :close-on-click-modal="false">

        <el-form  label-width="120px" :model="filters" ref="filters">

          <el-row>
            <el-col :span="12">
              <el-form-item label="编号" prop = "idcIdQuery" >
                <el-input v-model="filters.idcIdQuery" placeholder="编号"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="名称" prop = "idcNameQuery">
                <el-input v-model="filters.idcNameQuery" placeholder="名称"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="法人" prop = "corpQuery">
                <el-input v-model="filters.corpQuery" placeholder="法人"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="邮编" prop = "idcZipQuery">
                <el-input v-model="filters.idcZipQuery" placeholder="邮编"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="经营者地址" prop = "idcAddQuery">
                <el-input v-model="filters.idcAddQuery" placeholder="地址"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="安全责任人" prop = "idcOfficerQuery">
                <el-input v-model="filters.idcOfficerQuery" placeholder="安全责任人"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="联系人" prop = "emergencyContactQuery">
                <el-input v-model="filters.emergencyContactQuery" placeholder="联系人"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="是否上报" prop = "ftpStatusQuery">
                <el-select v-model="filters.ftpStatusQuery" placeholder="请选择">
                  <el-option v-for="item in options" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <el-form-item label="时间" prop = "timeStampQuery">
                <el-date-picker v-model="filters.timeStampQuery" type="datetimerange" placeholder="选择日期时间" :editable="false">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click.native="seniorVisible = false">取消</el-button>
          <el-button type="primary" @click.native="getSeniorList">提交</el-button>
        </div>
      </el-dialog>


      <el-form :inline="true" >

        <el-form-item>
          <el-button type="success" @click="handleAdd" :disabled="menuPurview.add" icon="plus"  size="small">新增</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="warning" @click="handleImport" :disabled="menuPurview.import" size="small"><i class="fa fa-cloud-upload fa-lg"></i> 导入</el-button>
        </el-form-item>

        <el-form-item>
          <el-dropdown @command="handleExport">
            <el-button type="primary" :disabled="menuPurview.export" size="small" ><i class="fa fa-cloud-download fa-lg"></i> 导出<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="0"  :disabled = "exportDis">当页数据</el-dropdown-item>
              <el-dropdown-item command="1"  :disabled = "exportDis">查询数据</el-dropdown-item>
              <el-dropdown-item command="-1" :disabled = "exportDis">全部数据</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form-item>
      </el-form>

    </el-col>


    <!--列表-->
    <el-table :data="ircsTest"  :height="600" v-loading="listLoading" @selection-change="selsChange"
              highlight-current-row stripe border resizable>
      <el-table-column type="selection"  width="50">
      </el-table-column>
      <el-table-column prop="idcid"  min-width = "80" show-overflow-tooltip label="编号" sortable>
      </el-table-column>
      <el-table-column prop="idcname"   min-width = "100" show-overflow-tooltip label="名称">
      </el-table-column>
      <el-table-column prop="corp"   min-width = "80" show-overflow-tooltip label="法人">
      </el-table-column>
      <el-table-column prop="idczip"   min-width = "80" show-overflow-tooltip label="邮编">
      </el-table-column>
      <el-table-column prop="idcadd"   min-width = "100" show-overflow-tooltip label="地址">
      </el-table-column>

      <el-table-column label="安全责任人"  align = "center"  min-width = "120" show-overflow-tooltip>
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>证件类型: {{ scope.row.idc_cardname }}</p>
            <p>证件号码: {{ scope.row.idc_ID }}</p>
            <p>固定电话: {{ scope.row.idc_tel }}</p>
            <p>移动电话: {{ scope.row.idc_mobile }}</p>
            <p>Email地址: {{ scope.row.idc_Email }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.idc_name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="联系人" align = "center"   min-width = "100" show-overflow-tooltip>
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>证件类型: {{ scope.row.em_cardname }}</p>
            <p>证件号码: {{ scope.row.em_ID }}</p>
            <p>固定电话: {{ scope.row.em_tel }}</p>
            <p>移动电话: {{ scope.row.em_mobile }}</p>
            <p>Email地址: {{ scope.row.em_Email }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.em_name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="timestamp" min-width = "100"   show-overflow-tooltip label="时间" :formatter="formatTime" sortable>
      </el-table-column>
      <el-table-column prop="idcispnum" min-width = "100"   show-overflow-tooltip label="数量" sortable>
      </el-table-column>
      <el-table-column prop="usernum" min-width = "100"   show-overflow-tooltip label="用户" sortable>
      </el-table-column>
      <el-table-column prop="ftpstatus" min-width = "100"   show-overflow-tooltip label="状态" :formatter="formatState" sortable>
      </el-table-column>

      <el-table-column type="expand" label="详情">
        <template scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="名称">
              <span>{{ props.row.idcname }}</span>
            </el-form-item>
            <el-form-item label="编号">
              <span>{{ props.row.idcid }}</span>
            </el-form-item>
            <el-form-item label="法人">
              <span>{{ props.row.corp }}</span>
            </el-form-item>
            <el-form-item label="邮编">
              <span>{{ props.row.idczip }}</span>
            </el-form-item>
            <el-form-item label="地址">
              <span>{{ props.row.idcadd }}</span>
            </el-form-item>
            <el-form-item label="时间">
              <span>{{ props.row.timestamp }}</span>
            </el-form-item>
            <el-form-item label="安全责任人-姓名">
              <span>{{ props.row.idc_name }}</span>
            </el-form-item>
            <el-form-item label="联系人-姓名">
              <span>{{ props.row.em_name }}</span>
            </el-form-item>
            <el-form-item label="安全责任人-证件类型">
              <span>{{ props.row.idc_cardname }}</span>
            </el-form-item>
            <el-form-item label="联系人-证件类型">
              <span>{{ props.row.em_cardname }}</span>
            </el-form-item>
            <el-form-item label="安全责任人-证件号码">
              <span>{{ props.row.idc_ID }}</span>
            </el-form-item>
            <el-form-item label="联系人-证件号码">
              <span>{{ props.row.em_ID }}</span>
            </el-form-item>
            <el-form-item label="安全责任人-固定电话">
              <span>{{ props.row.idc_tel }}</span>
            </el-form-item>
            <el-form-item label="联系人-固定电话">
              <span>{{ props.row.em_tel }}</span>
            </el-form-item>
            <el-form-item label="安全责任人-移动电话">
              <span>{{ props.row.idc_mobile }}</span>
            </el-form-item>
            <el-form-item label="联系人-移动电话">
              <span>{{ props.row.em_mobile }}</span>
            </el-form-item>
            <el-form-item label="安全责任人-Email地址">
              <span>{{ props.row.idc_Email }}</span>
            </el-form-item>
            <el-form-item label="联系人-Email地址">
              <span>{{ props.row.em_Email }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column label="操作" min-width="150" header-align = "center" align = "center">
        <template scope="scope">
          <el-button-group>
            <el-button size="small" type="primary" :disabled="menuPurview.modify" @click="handleEdit(scope.$index, scope.row)" icon="edit"></el-button>
            <el-button size="small" type="danger" :disabled="menuPurview.delete" @click="handleDel(scope.$index, scope.row)" icon="delete"></el-button>
          </el-button-group>
          <!--<el-button size="small" type="primary" :disabled="menuPurview.modify" @click="handleEdit(scope.$index, scope.row)" icon="edit">编辑</el-button>-->
          <!--<el-button size="small" type="danger" :disabled="menuPurview.delete" @click="handleDel(scope.$index, scope.row)" icon="delete">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>

    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0 || menuPurview.delete">批量删除</el-button>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10,15,25,50,100]"
        :page-size=filters.pageSize
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        style="float:right;">
      </el-pagination>
    </el-col>

    <!--新增界面-->
    <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" ref="addForm"  label-width="120px" :rules="addFormRules">
        <el-form-item label="编号" prop="idcid">
          <el-input v-model="addForm.idcid" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="idcname">
          <el-input v-model="addForm.idcname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="法人" prop="corp">
          <el-input v-model="addForm.corp" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮编" prop="idczip">
          <el-input v-model="addForm.idczip" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="idcadd">
          <el-input v-model="addForm.idcadd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch on-text="" off-text="" v-model="addForm.ftpstatus"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>

    </el-dialog>


    <!--编辑界面-->
    <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
      <!-- label-width Control form description length -->
      <el-form :model="editForm" ref="editForm"  label-width="120px" :rules="editFormRules">
        <el-form-item label="编号" prop="idcid">
          <el-input v-model="editForm.idcid"  auto-complete="off" :disabled="true" ></el-input>
        </el-form-item>
        <el-form-item label="名称" prop="idcname">
          <el-input v-model="editForm.idcname"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="法人" prop="corp">
          <el-input v-model="editForm.corp"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮编" prop="idczip">
          <el-input v-model="editForm.idczip" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="idcadd">
          <el-input v-model="editForm.idcadd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch on-text="" off-text="" v-model="editForm.ftpstatus"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>

    <!--导入界面-->
    <el-dialog title="导入" v-model="importFormVisible" :close-on-click-modal="false">
      <el-upload
        class="upload-demo"
        action="/act-m-web/common/vueTest/upload.do"
        ref="upload"
        :headers="uploadAccept"
        :file-list="fileList"
        drag
        :on-success = "importScc"
        :on-error ="importErr"
        :before-upload="importBefore"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">格式说明: xls 或xlsx 文档 (支持Excel 97-2003 工作簿 和 Excel 2007)，<a href="/act-m-web/common/vueTest/download.do">模板下载</a>
          <br/><br/>
          <el-button type="primary" @click="submitUpload">确定</el-button>
          <el-button @click="closeImport">取消</el-button>
        </div>
      </el-upload>

    </el-dialog>


    <el-dialog title="错误信息" v-model="importInfoVisible" :close-on-click-modal="false">
      <div v-html="importInfo">
      </div>
    </el-dialog>


  </section>
</template>
<script>
  import dateUtil from '../../utils/dateUtil'
  import purviewButton from '../../utils/purviewUtil'
  import {getIrcsListPage,editIrcs,batchRemoveIrcs,exportIrcsList} from './elemTable.api'
  export default {
    data() {
      return {
        menuPurview:{
          query: true,
          add: true,
          import: true,
          export: true,
          modify: true,
          delete: true,
        },
        filters: {
          idcIdQuery: '',
          idcNameQuery: '',
          corpQuery: '',
          idcZipQuery: '',
          idcAddQuery: '',
          idcOfficerQuery: '',
          emergencyContactQuery: '',
          timeStampQuery: '',
          ftpStatusQuery: '',
          pageIndex: 1,
          pageSize: 15,
          exportType:''
        },
        options: [{
          value: '1',
          label: '成功'
        }, {
          value: '0',
          label: '失败'
        }],
        ircsTest: [],
        sels: [],//列表选中列
        border :true,
        tooltip : true,
        listLoading: false,
        total: 0,
        totalPageCount: 0,

        //高级查询
        seniorVisible:false,

        //add
        addFormVisible: false,//新增界面是否显示
        addLoading: false,
        //新增界面数据
        addForm: {
          idcid:'',
          idcname:'',
          idczip:'',
          idcadd:'',
          corp:'',
          ftpstatus:false,
          idcofficer:'1',
          emergencycontact:'2',
          commonFlag:'add',
        },
        addFormRules: {
          idcid: [
            { required: true, message: '请输入编号', trigger: 'blur' }
          ],
          idcname: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          corp: [
            { required: true, message: '请输入法人', trigger: 'blur' }
          ],
          idczip: [
            { required: true, message: '请输入邮编', trigger: 'blur' },
            { min : 6, max: 6, message: '邮编长度必须为6位', trigger: 'blur' }
          ],
          idcadd: [
            { required: true, message: '请输入地址', trigger: 'blur' }
          ],
        },
//                edit
        editFormVisible: false,//编辑界面是否显示
        editLoading: false,
        editForm: {
          idcid:'',
          idcname:'',
          idczip:'',
          idcadd:'',
          corp:'',
          ftpstatus:'',
          commonFlag:'edit',
        },
        editFormRules: {
          idcid: [
            { required: true, message: '请输入编号', trigger: 'blur' }
          ],
          idcname: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          corp: [
            { required: true, message: '请输入法人', trigger: 'blur' }
          ],
          idczip: [
            { required: true, message: '请输入邮编', trigger: 'blur' },
            { min : 6, max: 6, message: '邮编长度必须为6位', trigger: 'blur' }
          ],
          idcadd: [
            { required: true, message: '请输入地址', trigger: 'blur' }
          ],

        },
        //导入模块
        importFormVisible:false,
        uploadAccept:{
          accept:'application/json'
        },
        importInfo:'',
        importInfoVisible: false,
        fileList:[],
        //导出
        exportDis:false,
      }
    },
    methods: {

      formatState: function (row, column) {
        return row.ftpstatus == true ? '成功' : row.ftpstatus == false ? '失败' : '未知';
      },
      formatTime: function (row, column) {
        row.timestamp = (!row.timestamp  || row.timestamp  == '') ? '' : dateUtil.formatDate.format(new Date(row.timestamp), 'yyyy-MM-dd hh:mm:ss')
        return row.timestamp;
      },
      handleCurrentChange(val) {
        if(val == 1){
          this.filters.pageIndex = 0;
        } else{
          this.filters.pageIndex = (val-1) * (this.filters.pageSize) - 1;
        }
        this.getIrcsList();
      },
      handleSizeChange(val){
        this.filters.pageSize = val;
        this.handleCurrentChange(1);
      },
      handleReset(formName) {
        this.$refs[formName].resetFields();
        this.getIrcsList();
      },
      //高级查询
      handleSenior: function () {
        this.seniorVisible = true;
      },
      getSeniorList:function(){
        this.seniorVisible = false;
        if(typeof this.filters.timeStampQuery[0] != 'string'){
          this.filters.timeStampQuery = [util.formatDate.format(this.filters.timeStampQuery[0],'yyyy-MM-dd hh:mm:ss'),util.formatDate.format(this.filters.timeStampQuery[1],'yyyy-MM-dd hh:mm:ss')];
        }
        this.getIrcsList();
      },
      //Paging query IRCS List
      getIrcsList() {
        this.listLoading = true;
        getIrcsListPage(this.filters).then((data) => {
          this.total = data.total;
        this.ircsTest = data.rows;
        this.listLoading = false;
      });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      //批量删除
      batchRemove: function () {
        var ids = this.sels.map(item => item.idcid).toString();
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
        let para = { deleteIds: ids };
        batchRemoveIrcs(para).then((res) => {
          this.listLoading = false;
        this.$message({
          message: '删除成功',
          type: 'success'
        });
        this.getIrcsList();
      });
      }).catch(() => {

        });
      },

      //删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
        let para = { deleteIds: row.idcid };
        batchRemoveIrcs(para).then((res) => {
          this.listLoading = false;
        this.$message({
          message: '删除成功',
          type: 'success'
        });
        this.getIrcsList();
      });
      }).catch(() => {

        });
      },

      //显示新增界面
      handleAdd: function () {
        this.addFormVisible = true;
      },
      //新增
      addSubmit: function () {
        this.$refs.addForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.addLoading = true;
            editIrcs(this.addForm).then((res) => {
              this.addLoading = false;
            if(res.success == 'err1'){
              this.$message({
                message: '已存在此编号信息',
                type: 'error'
              });
            }else if(res.success == 'err2'){
              this.$message({
                message: '新增失败',
                type: 'error'
              });
            }else{
              this.$message({
                message: '提交成功',
                type: 'success'
              });
            }
            this.$refs['addForm'].resetFields();
            this.addFormVisible = false;
            this.getIrcsList();
          });
          });
          }
        });
      },

      //显示编辑界面
      handleEdit: function (index, row) {
        this.editFormVisible = true;
        this.editForm.idcid = (row.idcid);
        this.editForm.idcname = (row.idcname);
        this.editForm.idczip = (row.idczip);
        this.editForm.idcadd = (row.idcadd);
        this.editForm.ftpstatus = (row.ftpstatus);
        this.editForm.corp = (row.corp);
        this.editForm.idcofficer = (row.idcofficer);
        this.editForm.emergencycontact = (row.emergencycontact);
      },
      //编辑
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true;
            editIrcs(this.editForm).then((res) => {
              this.editLoading = false;
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.$refs['editForm'].resetFields();
            this.editFormVisible = false;
            this.getIrcsList();
          });
          });
          }
        });
      },
      //导入
      handleImport: function () {
        this.importFormVisible = true;
      },
      importScc: function(response, file, fileList){
        if(response.uploadInfo){
//                    response.uploadInfo
          this.importInfoVisible = true;
          this.importInfo = response.uploadInfo;
        }else{
          this.$message.success('导入成功!');
        }
        this.fileList = [];
        this.importFormVisible = false;
      },
      importErr: function(err, file, fileList){
        this.$message.error('导入失败!');
        this.fileList = [];
        this.importFormVisible = false;
      },
      importBefore: function(file) {
        const suffix = (file.name).substring((file.name).lastIndexOf('.') + 1);
        if (suffix != 'xls' && suffix != 'xlsx') {
          this.$message.error('导入的文件只能为xls 或xlsx');
          return false;
        }
        return true;
      },
      submitUpload:  function(){
        this.$refs.upload.submit();
      },
      closeImport: function(){
        this.importFormVisible = false;
      },
      handleExport(exportType){
        /*this.filters.exportType = exportType;
        this.exportDis = true;

        //TODO 使用后端返回json数据 导出excel
//                exportJsonExcel().then(data => {
//                    let {exportData,fileName} = data;
//                    exportJsonExcel(exportData,fileName);
//                });

        //TODO 使用前端创建隐藏form 后端直接返回下载excel
        exportDataExcel('/act-m-web/common/vueTest/exportExcel.do',this.filters);


        //如果不还原导出类型 会造成导出报错
        this.filters.exportType = '';
        this.exportDis = false;*/
      },
    },
    mounted() {
      this.getIrcsList();
      let secMenuPurview = JSON.parse(sessionStorage.getItem('secMenuPurview'));
      purviewButton(secMenuPurview.ircsoperatorinfo,this.menuPurview);

    }
  }
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;
    width: 50%;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0;
    width: 50%;
  }
</style>
