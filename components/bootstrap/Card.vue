<template>
  <div class="card shadow rounded">
      <slot name="header"></slot>
    <div class="card-body">
        <slot></slot>
    <hr>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
