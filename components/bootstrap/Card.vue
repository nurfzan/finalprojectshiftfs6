<template>
  <div class="card">
      <slot name="header"></slot>
    <div class="card-body">
        <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
