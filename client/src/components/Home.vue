<template>
  <div class="body">
    <navigator></navigator>
    <div class="container" id="home-container">
      <div class="columns" v-for="i in Math.ceil(recipes.length / itemsPerRow)" :key="i">
        <recipe-box v-for="item in
        recipes.slice((i - 1) * itemsPerRow, i * itemsPerRow)"
                  :key="item.Id" :title="item.Title"
                  :author="item.Author_Id" :description="item.Method"
                  :img="item.File" :idkey="item.Id">
        </recipe-box>
      </div>
    </div>
  </div>
</template>

<script>
  import recipeBox from './recipeBox'
  import Recipes from '@/services/Recipes'
  import Navigator from '@/components/Navigator.vue'

  export default {
    name: 'Home',
    components: {
      recipeBox,
      Recipes,
      Navigator
    },
    data () {
      return {
        recipes: [],
        itemsPerRow: 3
      }
    },
    async mounted () {
      // request to backend for all recipes
      this.recipes = (await Recipes.getAllRecipes()).data
    }
  }
</script>
