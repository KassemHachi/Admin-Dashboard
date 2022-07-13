import React from 'react'
import { Modal, Button, Input, Row, Checkbox, Text, Link as LINK } from "@nextui-org/react";

export default function AddInvoiceModal(props) {
    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={props.open}
            onClose={props.onClose}
            width="600px"
        >
            <Modal.Header>
                <Text id="modal-title" className='font-medium' size={18}>
                    Add New Invoice
                </Text>
            </Modal.Header>
            <Modal.Body>
                <label > Invoice Number :
                    <input type="text" className='py-2 px-1 w-full rounded-md border-2 border-gray-200 focus-within:border-[#0072f5] focus-within:outline-none' />
                </label>
                <label > Date created :
                    <input type="date" className='py-2 px-1 w-full rounded-md border-2 border-gray-200 focus-within:border-[#0072f5] focus-within:outline-none' />
                </label>
                <label > Client :
                    <input type="name" className='py-2 px-1 w-full rounded-md border-2 border-gray-200 focus-within:border-[#0072f5] focus-within:outline-none' />
                </label>
                <label > Amount ($) :
                    <input type="number" className='py-2 px-1 w-full rounded-md border-2 border-gray-200 focus-within:border-[#0072f5] focus-within:outline-none' />
                </label>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onClick={props.onClose}>
                    Close
                </Button>
                <Button auto onClick={props.onClose}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
