import { computed, defineComponent, toRefs } from 'vue';
import { useDesign } from '@/hooks/useDesign.ts';

import '../styles/logo.less';

export default defineComponent({
  name: 'AppLogo',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { collapsed } = toRefs(props);
    const { prefixCls } = useDesign('logo');

    const logoClass = computed(() => {
      return [prefixCls, 'flex'];
    });

    return () => (
      <div class={logoClass.value}>
        <img src="/src/assets/vast.svg" alt="logo" class="w-8" />
        {!collapsed.value && <span class="ml-2 font-bold text-xl">Hsien Low Code</span>}
      </div>
    );
  },
});
