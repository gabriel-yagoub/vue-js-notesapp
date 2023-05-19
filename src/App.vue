<script setup>
  import { ref } from 'vue'
  import draggable from 'vuedraggable'

  const showModal = ref(false)
  const newNote = ref('')
  const notes = ref([])

  
  const addNote = () => {
    notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date().toLocaleDateString(),
      backgroundColor: getRandomColor(),
    });
    showModal.value = false;
    newNote.value = "";

    function getRandomColor() {
      return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    }
  }
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <button @click="addNote">Spara anteckning</button>
        <button class="closeBtn" @click="showModal = false">Stäng</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Anteckningar</h1>
        <button @click="showModal = true">+</button>
      </header>
      <draggable v-model="notes" tag="div" class="cards-container">
        <template #item="{ element }">
          <div :style="{ backgroundColor: element.backgroundColor }" class="card">
            <p class="main-text">{{ element.text }}</p>
            <p class="date">{{ element.date }}</p>
          </div>
        </template>
      </draggable>

      <!-- <div class="cards-container">
        //Nedan är utan draggable
        <div class="card" v-for="noteObject in notes" :key="noteObject.id" :style="{backgroundColor: noteObject.backgroundColor}">
          <p class="main-text">{{ noteObject.text }}</p>
          <p class="date">{{ noteObject.date }}</p>
        </div>
      </div> -->

    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
  }

  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  header button {
    width:50px;
    height:50px;
    border: none;
    border-radius:100%;
    margin:4px;
    cursor:pointer;
    background-color: black;
    color: white;
    font-size: 30px;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    width: 225px;
    height: 225px;
    padding: 10px;
    background-color: yellow;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .date {
    font-size: 13px;
    font-weight: bold;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeInAnimation ease 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  
  @keyframes fadeInAnimation {
  0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .modal {
    background-color: white;
    width: 500px;
    border-radius: 15px;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }
  .modal .closeBtn {
    background-color: rgb(174, 5, 5);
    margin-top: 7px;
  }
</style>
