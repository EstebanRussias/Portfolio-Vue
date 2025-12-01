<template>
  <footer class="site-footer">
    <div class="wrap">
      <p>&copy; {{ new Date().getFullYear() }} — Mon Portfolio</p>
      <p><small>Liens : <a href="#" @click.prevent>GitHub</a> • <a href="#" @click.prevent>LinkedIn</a></small></p>
    </div>
  </footer>
</template>

<script setup></script>

<style>
.site-footer { background:#f8fafc; padding:1rem 0; border-top:1px solid #e6eef8; text-align:center; }
</style>
