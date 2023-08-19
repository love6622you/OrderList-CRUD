import { ref } from "vue";

export default function dialogManagement() {
  // state
  const dialogInfo = ref({
    isShow: false,
    type: ""
  });

  const setDialog = (isShow: boolean, type: string) => {
    dialogInfo.value = {
      isShow,
      type
    };
  };

  const closeDialog = () => {
    setDialog(false, "");
  };

  return {
    dialogInfo,
    setDialog,
    closeDialog
  };
}
