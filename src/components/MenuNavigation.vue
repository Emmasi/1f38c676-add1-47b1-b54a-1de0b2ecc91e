<template>
  <nav class="col-12 d-flex px-xl-0">
    <a class="site-header__logo">Logga</a>
    <div class="col-9">
      <ul class="nav col-12">
        <li class="mr-4">
          <a class="nav-link position-relative pr-4 text-white">
            <span class="pb-1" @mouseover="openSubmenu('products')">
              Produkter &amp; tjänster
            </span>
          </a>
        </li>
        <li class="pr-0">
          <a class="nav-link position-relative pr-4 text-white">
            <span class="pb-1" @mouseover="openSubmenu('articles')">
              Artiklar &amp; kunskap
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="nav col-12">
        <li class="mr-4">
          <a class="nav-link position-relative pr-4 text-white">
            <span class="pb-1"> Hjälp &amp; Kontakt </span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    openSubmenu(menu) {
      this.$emit("update:activeSubmenu", menu);
    },
    closeSubmenu() {
      this.$emit("update:activeSubmenu", null);
    },
  },
};
</script>
