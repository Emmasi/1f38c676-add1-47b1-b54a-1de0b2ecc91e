<template>
  <div class="d-block d-md-none px-1 py-2">
    <ul class="d-flex justify-content-between p-0">
      <li><a class="site-header__logo">Logga</a></li>
      <li class="px-4 py-2 text-white">Privat</li>
      <li class="top-menu_item-mob ml-1 px-4 py-2">Företag</li>
    </ul>
    <ul class="d-flex justify-content-between p-0">
      <li>
        <a class="nav-link text-white">
          <span class="pb-1" @mouseover="openSubmenu('products')">
            Produkter &amp; tjänster
          </span>
        </a>
      </li>
      <li>
        <a class="nav-link text-white">
          <span class="pb-1" @mouseover="openSubmenu('articles')">
            Artiklar &amp; kunskap
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
