import type { MaybeRefOrGetter } from "vue";

export const useMouseOverEnd = <T extends HTMLElement>(
  el: MaybeRefOrGetter<T | undefined>,
  callback: (e: Event) => void
) => {
  const _el = toRef(el);

  onMounted(() => {
    if (!_el.value) return;
    _el.value.addEventListener("mouseover", callback);
  });

  onUnmounted(() => {
    if (!_el.value) return;
    _el.value.removeEventListener("mouseover", callback);
  });

  watch(_el, (newValue, oldValue) => {
    if (!newValue || !oldValue) return;
    oldValue.removeEventListener("mouseover", callback);
    newValue.addEventListener("mouseover", callback);
  });
};
