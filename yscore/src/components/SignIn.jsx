import React from 'react';
import {
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'




function SignIn() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <div>
            <Button onClick={onOpen}>Sign In</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign In</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Sign In
                        </Button>
                        <Button onClick={onOpen}>Sign Up!</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>

    );
};

export default SignIn;