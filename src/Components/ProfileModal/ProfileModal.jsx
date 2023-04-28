import { Modal, useMantineTheme } from "@mantine/core";

export default function ProfileModal({ modalOpen, setModalOpen }) {
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
        <form className="infoForm">
          <h3>Your Info</h3>
          <div>
            <input type="text" name="firstName" placeholder="First Name" className="infoInput" />
            <input type="text" name="lastName" placeholder="Last Name" className="infoInput" />
          </div>
          <div>
          <input type="text" name="workAt" placeholder="Works At" className="infoInput" />
          </div>
          <div>
          <input type="text" name="livesIn" placeholder="livesIn" className="infoInput" />
            <input type="text" name="country" placeholder="country" className="infoInput" />
          </div>
          <div>
            <input type="text" name="Relationship Status" placeholder="relationshipStatus" className="infoInput" />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImage" />
            Cover Image
            <input type="file" name="coverImage" />
          </div>
          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}
