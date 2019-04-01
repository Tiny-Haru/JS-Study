let app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
});

let app2 = new Vue({
  el: "#app-2",
  data: {
    message: "이 페이지는 " + new Date() + " 에 로드 되었습니다."
  }
});

let app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});

let app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "JavaScript 배우기" },
      { text: "Vue 배우기" },
      { text: "무언가 멋진 것을 만들기" }
    ]
  }
});

let app5 = new Vue({
  el: "#app-5",
  data: {
    message: "안녕하세요! Vue.js!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

let app6 = new Vue({
  el: "#app-6",
  data: {
    message: "안녕하세요, Vue!"
  }
});

//todo-item 이름을 가진 컴포넌트를 정의합니다.
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li> {{ todo.text }} </li>"
});

let app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans ar supposed to eat" }
    ]
  }
});

var vm = new Vue({
  el: "#example",
  data: {
    message: "안녕하세요"
  },
  computed: {
    reverseMessage: function() {
      return this.message.split("").reverse.join("");
    }
  }
});
