<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>

    <el-form-item prop="userId">
      <el-input type="text" v-model="ruleForm2.userId" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%; "@click.native.prevent="handleSubmit2"  :loading="logining">登录</el-button>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%; "@click.native.prevent="handleReset2">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import { login } from './Login.api.js';
  import { mapActions, mapGetters } from 'vuex';
  import  base64Utils  from '../../utils/base64Utils';
  export default {
    data() {
      return {
        name:"xiajun",
        logining: false,
        ruleForm: {
          userId: '',
          password: '',
          verify:'',
        },
        ruleForm2: {
          userId: '',
          password: '',
          verify:'',
        },
        rules2: {
          userId: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { required: true, message: '密码长度至少为6位',min : 6, trigger: 'blur' },
          ],
          verify: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { required: true, message: '验证码长度必须为4位',min : 4, max: 4, trigger: 'blur' },
          ]
        }
      }
    },
    computed:{
      ...mapGetters([
        'menuitems',
        'isLoadRoutes',
      ])
    },
    methods:{
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true;
            this.ruleForm.userId = base64Utils(this.ruleForm2.userId);
            this.ruleForm.password = base64Utils(this.ruleForm2.password);
            login(this.ruleForm).then(data => {
              this.logining = false;
            let { msg, code, user,authorization,secMenuPurview } = data;
            if (code != 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
              sessionStorage.setItem('user', JSON.stringify(user));
              sessionStorage.setItem('authorization', JSON.stringify(authorization));
              sessionStorage.setItem('secMenuPurview', JSON.stringify(secMenuPurview));

              if(!this.isLoadRoutes){
                this.addMenu(authorization);
                this.$router.options.routes = this.menuitems;
                this.$router.addRoutes(this.menuitems);
                this.loadRoutes();
              }
              this.$router.push({ path: '/ircsoperatorinfo' });
            }
          });
          }
        });
      },
    ...mapActions([
        'addMenu',
        'loadRoutes'
      ])
    },
    mounted(){
      if(this.isLoadRoutes){
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('authorization');
        sessionStorage.removeItem('secMenuPurview');
        location.replace('');
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;

  }
</style>
