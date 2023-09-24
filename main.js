// var app = new Vue({
//     el: '#app',
//     data: {
//         message: '',
//     },
// });

var app3 = new Vue({
    el: '#app3',
    data: {
        addText: '',
        list:[],
        uniqueKey: 0,
    },
    methods: {
        addToDo() {
            if (this.addText) {
                this.list.push({
                    'text': this.addText,
                    'id': this.uniqueKey + 1,
                    'completed': false
                });
            }
            this.addText = '';//入力値初期化
            this.uniqueKey++;
        },
        deleteToDo(id) {
            var deleteIndex = '';
            var check = confirm('ToDoリストを削除します');
            if (check === true) {
                this.list.some(function(value, index) {
                    if (value.id === id) {
                        deleteIndex = index;
                    }
                });
                this.list.splice(deleteIndex, 1);
            }
        },
        editToDo(id) {
            let newText = window.prompt('ToDoリストを編集する');
            if (newText === "") {
                alert('入力欄が空欄です');
            } else if (newText !== null) {
                this.edit(id, newText);
            }
        },
        edit(id, text) {
            let editIndex = '';
            this.list.some(function (value, index) {
                if (value.id === id) {
                    editIndex = index;
                }
            });
            this.list[editIndex].text = text;
        }
    }
});