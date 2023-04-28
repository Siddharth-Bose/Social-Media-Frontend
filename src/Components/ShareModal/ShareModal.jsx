import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";

export default function ShareModal({ modalOpen, setModalOpen }) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size= '55%'
      >
        <PostShare />
      </Modal>
    </>
  );
}
