// remove this comment to see all TypeScript errors
// @ts-nocheck
export const useMouseOver = (el, callback) => {
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
