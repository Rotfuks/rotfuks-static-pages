<template>
  <div id="footer">
    <footer
      class="text-center d-flex flex-column"
    > 
      <div>
        <v-btn
        v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          :icon="icon.name"
          :href="icon.href"
          :alt="icon.text"
          :target="icon.target"
          variant="text"
      ></v-btn>
      </div>
      
      <v-divider></v-divider>
      <div id="ending" class="theme--light">
        {{ new Date().getFullYear() }} — <strong>Rotfuks</strong>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
  const icons = [{
    name: "mdi-account-circle",
    href: "/about-me.html",
    target: "_self",
    text: "About Me"
  },{
    name: "mdi-format-list-text",
    href: "/portfolio.html",
    target: "_self",
    text: "Portfolio"
  },{
    name: "mdi-linkedin",
    href: "https://www.linkedin.com/in/dominik-kress-33a540174/",
    target: "_blank",
    text: "LinkedIn"
  }];
</script>

<style scoped>
#footer {
  margin-top: 50px;
}
#ending {
  margin-top: 10px;
  font-size: smaller;
}
</style>
