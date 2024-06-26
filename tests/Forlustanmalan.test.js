import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import Forlustanmalan from '../src/components/Forlustanmalan.vue';
import ContentComponent from '../src/components/ContentComponent.vue';

vi.mock('axios');

describe('Forlustanmalan.vue', () => {
  let wrapper;

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        mainContentArea: {
          expandedValue: [
            { contentLink: { id: 1 } },
            { contentLink: { id: 2 } }
          ]
        }
      }
    });

    wrapper = shallowMount(Forlustanmalan, {
      global: {
        components: {
          ContentComponent
        }
      }
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('fetches content and updates childContentLinkIds correctly', async () => {
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.childContentLinkIds).toEqual([1, 2]);
  });

  it('renders the correct number of ContentComponent based on childContentLinkIds', async () => {
    await wrapper.vm.$nextTick();

    const contentComponents = wrapper.findAllComponents(ContentComponent);
    expect(contentComponents.length).toBe(2);
    expect(contentComponents[0].props().contentId).toBe(1);
    expect(contentComponents[1].props().contentId).toBe(2);
  });

  it('passes correct props to ContentComponent', async () => {
    await wrapper.vm.$nextTick();

    const contentComponents = wrapper.findAllComponents(ContentComponent);
    expect(contentComponents[0].props().contentAreas).toEqual(['mainContentArea', 'firstContentArea', 'secondContentArea', 'buttonContentArea']);
    expect(contentComponents[1].props().contentAreas).toEqual(['mainContentArea', 'firstContentArea', 'secondContentArea', 'buttonContentArea']);
  });
});
