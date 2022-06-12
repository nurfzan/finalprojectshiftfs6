<template>
  <div id="app">
    <div class="main-wrapper">
      <!-- Main Content -->
      <PartialsNavbar/>
      <PartialsSidebar/>
      <div class="main-content">
        <section class="section">
          <div class="section-body"></div>
          <Nuxt/>
        </section>
      </div>
      <PartialsFooter/>
    </div>
  </div>
</template>
