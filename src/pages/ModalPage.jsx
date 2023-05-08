import { useState } from "react";
import Modal from "../components/Modal";
import Button from '../components/Button';

function ModalPage () {
    const [showModal, setShowodal] = useState(false);

    function handleClick () {
        setShowodal(true);
    }

    const handleClose = () => {
        setShowodal(false);
    }

    const actionBar = <div><Button onClick={handleClose} primary>Got it!</Button></div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
            This is paragraph insinde Modal component
        </p>
    </Modal>

    return (
    <div>
        <Button onClick={handleClick} primary>Open modal</Button>
        {showModal && modal}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis, sapien ut sagittis accumsan, ex quam ultrices ipsum, nec viverra purus ipsum vel mi. Suspendisse potenti. In pellentesque, erat vel blandit aliquet, sapien odio faucibus lacus, vitae fringilla tortor lacus consequat diam. Sed leo massa, auctor in scelerisque et, aliquet id mauris. Suspendisse eu felis purus. Vestibulum tincidunt eu dolor ac mollis. Maecenas aliquam dictum interdum.
        </p>
    </div>
    );
}

export default ModalPage;