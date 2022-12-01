// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe.
// l’array di oggetti di partenza può essere una cosa così:

const { createApp } = Vue;
createApp ({
  data (){
    return {
      tasks: [
        { text: 'Fare i compiti', done: false }, 
        { text: 'Fare la spesa', done: true }, 
        { text: 'Fare il bucato', done: false }
      ]        
    }
  },

  methods: {
    addTask(){
      this.tasks.push({text:this.newTask});
      this.newTask = '';
    },
    
    removeTask(indice){
      this.tasks.splice(indice,1);
    }
  }
}).mount('#app')