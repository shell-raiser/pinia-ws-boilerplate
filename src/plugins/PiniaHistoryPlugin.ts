import { useRefHistory } from "@vueuse/core";
import { ref } from "vue";
export default ({ store }) => {
  const doingHistory = ref(false);
  const state = ref(JSON.stringify(store.$state));
  const { history, undo, redo } = useRefHistory(state, {
    deep: true,
  });
  store.undo = () => {
    doingHistory.value = true;
    undo();
    store.$state = JSON.parse(state.value);
    doingHistory.value = false;
  };

  store.redo = () => {
    doingHistory.value = true;
    redo();
    store.$state = JSON.parse(state.value);
    doingHistory.value = false;
  };

  store.$subscribe((mutation, st) => {
    if (doingHistory.value) return;
    state.value = JSON.stringify(st);
  });
  return {
    history,
  };
};
