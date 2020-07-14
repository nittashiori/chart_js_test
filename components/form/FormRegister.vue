<template>
  <div class="form form-register">
    <div class="form-group">
      <div class="form-group__head">メールアドレス</div>
      <div class="form-group__body">
        <label>
          <input
            type="email"
            name="email"
            placeholder="例）○○○○@○○○○.○○"
            class="input"
          />
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="form-group__head">名前</div>
      <div class="form-group__body">
        <label>
          <input
            type="text"
            name="name"
            placeholder="例）山田太郎"
            class="input"
          />
        </label>
      </div>
    </div>
    <div class="form-group">
      <div class="form-group__head">部門</div>
      <div class="form-group__body">
        <div class="select-area">
          <select name="department" class="select-box">
            <option value="null">選択してください</option>
            <option value="管理部門">管理部門</option>
            <option value="経営部門">経営部門</option>
            <option value="運営部門">運営部門</option>
            <option value="教務部門">教務部門</option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-group__head">部</div>
      <div class="form-group__body">
        <div class="select-area">
          <select name="category" class="select-box">
            <option value="null">選択してください</option>
            <option value="経営企画部">経営企画部</option>
            <option value="経理部">経理部</option>
          </select>
        </div>
      </div>
    </div>
    <!-- <div class="form-group">
      <div class="form-group__head">部</div>
      <div class="form-group__body">
        <div class="select-area">
          <select name="category" class="select-box">
            <option value="経営企画部">経営企画部</option>
            <option value="経理部">経理部</option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-group__head">部</div>
      <div class="form-group__body">
        <div class="select-area">
          <select name="category" class="select-box">
            <option value="運営部">人材開発部</option>
            <option value="国際部">国際部</option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-group__head">部</div>
      <div class="form-group__body">
        <div class="select-area">
          <select name="category" class="select-box">
            <option value="運営部">運営部</option>
            <option value="広告宣伝部">広告宣伝部</option>
          </select>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-group__head">部</div>
      <div class="form-group__body">
        <div class="select-area">
          <select name="category" class="select-box">
            <option value="中学受験部">中学受験部</option>
            <option value="広告受験部">広告受験部</option>
          </select>
        </div>
      </div>
    </div> -->
    <div class="form-group">
      <div class="form-group__head">性別</div>
      <div class="form-group__body">
        <div class="radio-area">
          <div class="radio">
            <input id="gender-1" type="radio" name="gender" checked />
            <label for="gender-1" class="radio__label">男</label>
          </div>
          <div class="radio">
            <input id="gender-2" type="radio" name="gender" />
            <label for="gender-2" class="radio__label">女</label>
          </div>
          <div class="radio">
            <input id="gender-3" type="radio" name="gender" />
            <label for="gender-3" class="radio__label">LGBT+</label>
          </div>
        </div>
      </div>
    </div>
    <Button>登録</Button>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  component: {
    Button,
  },
}
</script>

<style></style>
