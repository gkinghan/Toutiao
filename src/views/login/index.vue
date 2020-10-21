<template>
    <div class="login-container">
    <div class="login-form-wrap">
      <div class="login-head">
        <div class="logo"></div>
      </div>

      <el-form ref="form" class="login-form" :model="form" :rules="rules">
        <el-form-item prop='mobile'>
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item prop="code">
          <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
        </el-form-item>

        <el-form-item prop="agree">
          <el-checkbox v-model="form.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button @click="login" class="login-btn" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        mobile: '13911111111',
        code: '246810',
        agree: false
      }
    }
  },
  methods: {
    login () {
      if (!this.form.agree) {
        // alert('请同意用户许可')
        this.$message({
          message: '请同意用户许可',
          type: 'error',
          showClose: true
        })
        return
      }
      this.$http.post('/mp/v1_0/authorizations', this.form).then(res => {
        // console.log('登录成功', res)
        this.$message.success('登录成功')
      }).catch(err => {
        this.$message.error('登陆失败，手机号或者验证码错误')
        console.log(err)
        // console.log('登陆失败', err)
      })
    }
  }
}
</script>

<style lang="less">
// 铺满整屏
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background: url("../../assets/login_bg.jpg") no-repeat;
  background-size: cover;
  .login-form-wrap {
    min-width: 300px;
    padding: 30px 50px 10px;
    background-color: #fff;
    .login-head {
      display: flex;
      justify-content: center;
      .logo {
        width: 200px;
        height: 57px;
        background: url("../../assets/logo_index.png") no-repeat;
        background-size: contain;
      }
    }
    .login-form {
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
