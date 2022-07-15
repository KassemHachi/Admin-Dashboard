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
                    <input type="number" value={Math.floor(Math.random() * (10000 - 1 + 1) + 1)} readOnly className='py-2 read-only:bg-slate-100 px-1 w-full rounded-md border-2 border-gray-200 focus-within:border-[#0072f5] focus-within:outline-none' />
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
                <button className='py-2 px-4 hover:bg-[#e42f66] font-medium text-base rounded-lg hover:text-white transition-all .5s ease-linear' onClick={props.onClose}>Close</button>
                <button className='py-2 px-5 bg-[#0072f5] font-medium text-base rounded-lg text-white transition-all .5s ease-linear' onClick={props.onClose}>Add</button>

            </Modal.Footer>
        </Modal>
    )
}
