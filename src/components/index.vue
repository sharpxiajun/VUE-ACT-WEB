<template>
  <!-- root -->
  <div class="app" id="app" v-bind:class="{'app-header-fixed':app.settings.headerFixed, 'app-aside-fixed':app.settings.asideFixed, 'app-aside-folded':app.settings.asideFolded, 'app-aside-dock':app.settings.asideDock, 'container':app.settings.container}">
  <!-- navbar -->
  <div class="app-header navbar">
    <!-- navbar header -->
    <div class="navbar-header" v-bind:class="[app.settings.navbarHeaderColor]">
      <button class="pull-right visible-xs dk" >
        <i class="glyphicon glyphicon-cog"></i>
      </button>
      <button class="pull-right visible-xs">
        <i class="glyphicon glyphicon-align-justify"></i>
      </button>
      <!-- brand -->
      <a href="#/" class="navbar-brand text-lt">
        <i class="fa fa-btc"></i>
        <img src="static/img/logo.png" alt="." class="hide">
        <span class="hidden-folded m-l-xs">{{app.name}}</span>
      </a>
      <!-- / brand -->
    </div>
    <!-- / navbar header -->
    <!-- navbar collapse -->
    <div class="collapse pos-rlt navbar-collapse box-shadow" v-bind:class="[app.settings.navbarCollapseColor]">
      <!-- buttons -->
      <div class="nav navbar-nav hidden-xs">
        <a href="javascript:void(0);" class="btn no-shadow navbar-btn" v-on:click="headerFloderBtn">
          <i class="fa fa-fw" v-bind:class="asideFoldedFtn"></i>
        </a>
        <a href="javascript:void(0);" class="btn no-shadow navbar-btn" v-on:click="userShowBtn">
          <i class="icon-user fa-fw"></i>
        </a>
      </div>
      <!-- / buttons -->

      <!-- link and dropdown -->
      <ul class="nav navbar-nav hidden-sm">
        <li class="dropdown pos-stc" v-bind:class="{'open':style.dropdownmenu.flag}">
          <a href="javascript:void(0);" class="dropdown-toggle" v-on:click="dropMenuBtn">
            <span>ACT-VUE网站导航</span>
            <span class="caret"></span>
          </a>

          <div class="dropdown-menu wrapper w-full bg-white">
            <div class="row">
              <div class="col-sm-4">
                <div class="m-l-xs m-t-xs m-b-xs font-bold">概览 <span class="badge badge-sm bg-success">10</span></div>
                <div class="row">
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Profile</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Post</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Search</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Invoice</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Price</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Lock screen</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sign in</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sign up</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 b-l b-light">
                <div class="m-l-xs m-t-xs m-b-xs font-bold">基础组件<span class="label label-sm bg-primary">12</span></div>
                <div class="row">
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Buttons</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Icons <span class="badge badge-sm bg-warning">1000+</span></a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Grid</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Widgets</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Bootstap</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sortable</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Portlet</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Timeline</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-4 b-l b-light">
                <div class="m-l-xs m-t-xs m-b-xs font-bold">典型示例<span class="label label-sm bg-primary">12</span></div>
                <div class="row">
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Buttons</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Icons <span class="badge badge-sm bg-warning">1000+</span></a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Grid</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Widgets</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-xs-6">
                    <ul class="list-unstyled l-h-2x">
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Bootstap</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sortable</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Portlet</a>
                      </li>
                      <li>
                        <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Timeline</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="dropdown" v-bind:class="{'open':style.dropdown.flag}">
          <a href="javascript:void(0);" class="dropdown-toggle" v-on:click="dropBtn">
            <i class="fa fa-fw fa-plus visible-xs-inline-block"></i>
            <span translate="header.navbar.new.NEW">导航头部下拉效果</span> <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#" translate="header.navbar.new.PROJECT">Projects</a></li>
            <li>
              <a href>
                <span class="badge bg-info pull-right">5</span>
                <span translate="header.navbar.new.TASK">Task</span>
              </a>
            </li>
            <li><a href translate="header.navbar.new.USER">User</a></li>
            <li class="divider"></li>
            <li>
              <a href>
                <span class="badge bg-danger pull-right">4</span>
                <span translate="header.navbar.new.EMAIL">Email</span>
              </a>
            </li>
          </ul>
        </li>

      </ul>

      <!-- search form -->
      <form class="navbar-form navbar-form-sm navbar-left shift">
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control input-sm bg-light no-border rounded padder" placeholder="站内搜索...">
              <span class="input-group-btn">
                <button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>
              </span>
          </div>
        </div>
      </form>
      <!-- / search form -->

      <!-- nabar right -->
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown hidden-sm" v-bind:class="{'open':style.selectLang.flag}">
          <a href="javascript:void(0);" class="dropdown-toggle" v-on:click="selectLangBtn">
            {{app.selectLang}} <b class="caret"></b>
          </a>
          <!-- dropdown -->
          <ul class="dropdown-menu animated fadeInRight w">
            <li v-for="(label,langKey) in app.langs">
              <a href="">{{label}}</a>
            </li>
          </ul>
          <!-- / dropdown -->
        </li>
        <li class="hidden-xs">
          <a class="">
            <i class="fa fa-expand fa-fw text"></i>
            <i class="fa fa-compress fa-fw text-active"></i>
          </a>
        </li>
        <li class="dropdown"  v-bind:class="{'open':style.messageHeader.flag}">
          <a href="javascript:void(0);" class="dropdown-toggle" v-on:click="messageBtn">
            <i class="icon-bell fa-fw"></i>
            <span class="visible-xs-inline">Notifications</span>
            <span class="badge badge-sm up bg-danger pull-right-xs">2</span>
          </a>
          <!-- dropdown -->
          <div class="dropdown-menu w-xl animated fadeInUp">
            <div class="panel bg-white">
              <div class="panel-heading b-light bg-light">
                <strong>You have <span>2</span> notifications</strong>
              </div>
              <div class="list-group">
                <a href class="media list-group-item">
                    <span class="pull-left thumb-sm">
                      <img src="static/img/a0.jpg" alt="..." class="img-circle">
                    </span>
                    <span class="media-body block m-b-none">
                      Use awesome animate.css<br>
                      <small class="text-muted">10 minutes ago</small>
                    </span>
                </a>
                <a href class="media list-group-item">
                    <span class="media-body block m-b-none">
                      1.0 initial released<br>
                      <small class="text-muted">1 hour ago</small>
                    </span>
                </a>
              </div>
              <div class="panel-footer text-sm">
                <a href class="pull-right"><i class="fa fa-cog"></i></a>
                <a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>
              </div>
            </div>
          </div>
          <!-- / dropdown -->
        </li>
        <li class="dropdown" v-bind:class="{'open':style.systemHeader.flag}">
          <a class="dropdown-toggle clear" href="javascript:void(0);"  v-on:click="systemBtn">
              <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src="static/img/a0.jpg" alt="...">
                <i class="on md b-white bottom"></i>
              </span>
            <span class="hidden-sm hidden-md">夏俊</span> <b class="caret"></b>
          </a>
          <!-- dropdown -->
          <ul class="dropdown-menu animated fadeInRight w">
            <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">
              <div>
                <p>总金币1000个,已使用600个</p>
              </div>
              <progress-bar percentage="60%" cls="progress-xs m-b-none bg-white"></progress-bar>
            </li>
            <li>
              <a href>
                <span class="badge bg-danger pull-right">30%</span>
                <span>设置</span>
              </a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>
                <span class="label bg-info pull-right">new</span>
                Help
              </a>
            </li>
            <li class="divider"></li>
            <li>
              <a>退出</a>
            </li>
          </ul>
          <!-- / dropdown -->
        </li>
      </ul>

    </div>
  </div>

  <!-- menu -->
  <div class="app-aside hidden-xs" v-bind:class="[app.settings.asideColor]" ref="appaside">
    <div class="aside-wrap">
      <div class="navi-wrap">
        <!-- user -->
        <div class="clearfix hidden-xs text-center" id="aside-user" v-bind:class="userShowFtn">
          <div class="dropdown wrapper">
            <a ui-sref="app.page.profile">
          <span class="thumb-lg w-auto-folded avatar m-t-sm">
            <img src="static/img/a0.jpg" class="img-full" alt="...">
          </span>
            </a>
            <a href class="dropdown-toggle hidden-folded">
          <span class="clear">
            <span class="block m-t-sm">
              <strong class="font-bold text-lt">ACT</strong>
              <b class="caret"></b>
            </span>
            <span class="text-muted text-xs block">ACT-WEB前端组</span>
          </span>
            </a>
            <!-- dropdown -->
            <ul class="dropdown-menu animated fadeInRight w hidden-folded">
              <li class="wrapper b-b m-b-sm bg-info m-t-n-xs">
                <span class="arrow top hidden-folded arrow-info"></span>
                <div>
                  <p>300mb of 500mb used</p>
                </div>
              </li>
              <li>
                <a href>Settings</a>
              </li>
              <li>
                <a ui-sref="app.page.profile">Profile</a>
              </li>
              <li>
                <a href>
                  <span class="badge bg-danger pull-right">3</span>
                  Notifications
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <a ui-sref="access.signin">Logout</a>
              </li>
            </ul>
            <!-- / dropdown -->
          </div>
          <div class="line dk hidden-folded"></div>
        </div>
        <!-- / user -->

        <!-- nav -->
        <v-left-nav :app-settings="app.settings"></v-left-nav>
        <!-- nav -->

        <!-- aside footer -->
        <div class="wrapper m-t">
          <div class="text-center-folded">
            <span class="pull-right pull-none-folded">11%</span>
            <span class="hidden-folded">概览完成进度</span>
          </div>
          <progress-bar cls="progress-xxs m-t-sm dk" type="danger" percentage="65%"></progress-bar>
          <div class="text-center-folded">
            <span class="pull-right pull-none-folded">5%</span>
            <span class="hidden-folded">基础组件完成进度</span>
          </div>
          <progress-bar cls="progress-xxs m-t-sm dk" type="primary" percentage="45%"></progress-bar>
          <div class="text-center-folded">
            <span class="pull-right pull-none-folded">2%</span>
            <span class="hidden-folded">典型示例完成进度</span>
          </div>
          <progress-bar cls="progress-xxs m-t-sm dk" type="succes" percentage="14%"></progress-bar>
        </div>
        <!-- / aside footer -->

      </div>
    </div>



  </div>
  <!-- / menu -->
    <!-- content -->
    <div class="app-content">
      <div class="app-content-body fade-in-up">
        <router-view></router-view>
      </div>
    </div>
    <!-- /content -->

    <!-- footer -->
    <div class="app-footer wrapper b-t bg-light">
      <span class="pull-right">{{app.version}}
        <a href ui-scroll="app" class="m-l-sm text-muted">
          <i class="fa fa-long-arrow-up"></i>
        </a>
      </span>
      ACT-北京亚鸿世纪科技发展有限公司 &copy; 2017 Copyright.
    </div>
    <!-- / footer -->
  </div>
  <!-- /root -->
</template>
<script>
  import vLeftNav from './menu/leftnav.vue';
  import progressBar from './progressbar/progressbar.vue';
  export default {
    data() {
      return {
        app:{
          name:'VUE-ACT-WEB',
          version: '0.0.1',
          author:'xiajun',
          selectLang:"简体中文",
          langs:{en:'English', zh_jt:'简体中文', zh_ft:'繁體中文',de_DE:'German', it_IT:'Italian'},
          settings:{
            headerFixed: false,
            navbarHeaderColor: 'bg-black',
            navbarCollapseColor: 'bg-white-only',
            asideColor: 'bg-black',
            asideFixed: true,
            asideFolded: false,
            asideDock: false,
            container: false
          }
        },
        style:{
          dropdownmenu:{
            flag:false
          },
          dropdown:{
            flag:false
          },
          selectLang:{
            flag:false
          },
          messageHeader:{
            flag:false
          },
          systemHeader:{
            flag:false
          },
          userShow:{
            flag:false
          }
        }
      }
    },
    components:{
      vLeftNav,progressBar
    },
    methods:{
      headerFloderBtn() {
        this.app.settings.asideFolded = !this.app.settings.asideFolded;
      },
      dropMenuBtn() {
        this.style.dropdownmenu.flag = !this.style.dropdownmenu.flag;
      },
      dropBtn() {
        this.style.dropdown.flag = !this.style.dropdown.flag;
      },
      selectLangBtn() {
        this.style.selectLang.flag = !this.style.selectLang.flag;
      },
      messageBtn() {
        this.style.messageHeader.flag = !this.style.messageHeader.flag;
      },
      systemBtn() {
        this.style.systemHeader.flag = !this.style.systemHeader.flag;
      },
      userShowBtn() {
        this.style.userShow.flag = !this.style.userShow.flag;
      }
    },
    computed:{
      asideFoldedFtn() {
        return {
          'fa-indent':this.app.settings.asideFolded,
          'fa-dedent':!this.app.settings.asideFolded
        }
      },
      userShowFtn() {
        return {
          "hide":!this.style.userShow.flag,
          "show":this.style.userShow.flag
        }
      }
    }
  }
</script>
