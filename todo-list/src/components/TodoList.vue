<template>
    <div class="form-horizontal">
        <h1> {{ title }}</h1>
        
        <div class="form-group">
            <label for="none" class="col col-xs-2 control-label">Task</label>
            <div class="col col-xs-9">
                <input type="text" class="form-control" v-model="todo.name" @keyup.enter="add(todo)">
            </div>
            <button type="button" class="btn btn-success" @click="add(todo)">Add</button>
        </div>
        
        <div class="form-group">
            <label for="none" class="col col-xs-2 control-label" v-show="list.length > 0">Tasks</label>
            <div class="col col-xs-offset-2 col-xs-10">
                <div class="checkbox" v-for="item of list ">
                    <label :class="{checked: item.done}">
                        <input type="checkbox" :checked="item.done" @change="onChecked(item)"> {{ item.name }}                       
                    </label>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Todo List',
                list: [],
                todo: {
                    name: '',
                    done: false
                }
            }
        },
        methods: {
            add: function(todo) {
                if( !todo.name) return false;

                this.list.push({ name: todo.name, done: false});
                this.todo.name = '';
            },
            onChecked: function(todo) {
                todo.done = !todo.done;
            }
        }
    }
</script>

<style>
    .checked {
        text-decoration: line-through;
        color: red;
    }
</style>