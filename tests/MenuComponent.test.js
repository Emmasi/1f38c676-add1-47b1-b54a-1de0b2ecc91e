import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import MenuComponent from '../src/components/MenuComponent.vue';
import MenuSection from '../src/components/MenuDropdownSection.vue';
import MenuNavigation from '../src/components/MenuNavigation.vue';

vi.mock('axios');

describe('MenuComponent.vue', () => {
  let wrapper;

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        desktopMenu: {
          products: {
            first: { title: "Products 1", menuItems: ["Item 1", "Item 2"] },
            second: { title: "Products 2", menuItems: ["Item 3", "Item 4"] },
          },
          category: { title: "Articles", menuItems: ["Article 1", "Article 2"] },
          article: { title: "Articles", menuItems: ["Article 3", "Article 4"] },
          teaserImages: {
            first: ["Teaser 1", "Teaser 2"],
            second: ["Teaser 3", "Teaser 4"]
          }
        }
      }
    });

    wrapper = shallowMount(MenuComponent, {
      global: {
        components: {
          MenuSection,
          MenuNavigation
        }
      }
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('fetches menu data and updates component data correctly', async () => {
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.productsMenuFirst.title).toBe("Products 1");
    expect(wrapper.vm.productsMenuFirst.menuItems).toEqual(["Item 1", "Item 2"]);
    expect(wrapper.vm.productsMenuSecond.title).toBe("Products 2");
    expect(wrapper.vm.productsMenuSecond.menuItems).toEqual(["Item 3", "Item 4"]);
    expect(wrapper.vm.articlesMenuFirst.title).toBe("Articles");
    expect(wrapper.vm.articlesMenuFirst.menuItems).toEqual(["Article 1", "Article 2"]);
    expect(wrapper.vm.articlesMenuSecond.title).toBe("Articles");
    expect(wrapper.vm.articlesMenuSecond.menuItems).toEqual(["Article 3", "Article 4"]);
    expect(wrapper.vm.teaserImagesFirst).toEqual(["Teaser 1", "Teaser 2"]);
    expect(wrapper.vm.teaserImagesSecond).toEqual(["Teaser 3", "Teaser 4"]);
  });

  it('renders the correct HTML for products menu when activeSubmenu is "products"', async () => {
    wrapper.setData({ activeSubmenu: 'products' });
    await wrapper.vm.$nextTick();

    const menuSections = wrapper.findAllComponents(MenuSection);
    expect(menuSections.length).toBe(3);

    expect(menuSections[0].props().menuProducts).toEqual({ title: "Products 1", menuItems: ["Item 1", "Item 2"] });
    expect(menuSections[1].props().menuProducts).toEqual({ title: "Products 2", menuItems: ["Item 3", "Item 4"] });
    expect(menuSections[2].props().menu).toEqual(["Teaser 1", "Teaser 2"]);
  });

  it('renders the correct HTML for articles menu when activeSubmenu is "articles"', async () => {
    wrapper.setData({ activeSubmenu: 'articles' });
    await wrapper.vm.$nextTick();

    const menuSections = wrapper.findAllComponents(MenuSection);
    expect(menuSections.length).toBe(3);

    expect(menuSections[0].props().menuArticle).toEqual({ title: "Articles", menuItems: ["Article 1", "Article 2"] });
    expect(menuSections[1].props().menuArticle).toEqual({ title: "Articles", menuItems: ["Article 3", "Article 4"] });
    expect(menuSections[2].props().menu).toEqual(["Teaser 3", "Teaser 4"]);
  });
});
