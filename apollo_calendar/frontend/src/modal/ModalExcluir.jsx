import { Checkbox, Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import { FaTimes, FaTrash, FaArrowLeft } from "react-icons/fa";

import { Streamlit } from "streamlit-component-lib";

import { useMemo } from "react";

function ModalExcluir({
    setIsExcluirModalOpen,
    isExcluirModalOpen,
    item,
    patients,
    professionals,
    columns
}) {

    const handleSubmit = () => {
        Streamlit.setComponentValue({
            tipo: "locacao",
            operacao: "Remove",
            id: item.id
        })
        setIsExcluirModalOpen(false)
    }

    /*const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("pt-BR")
    }

    const formatTime = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        })
    }

    const [formData, setFormData] = useState({
        operacao: "Update",
        id: "",
        paciente: "",
        profissional: "",
        slot: "",
        data: "",
        inicio: "",
        fim: "",
        status: "",
        paciente_apollo: ""
    })

    useEffect(() => {
        if (item && isExcluirModalOpen) {

            const start = new Date(item.startTime)
            const end = new Date(item.endTime)

            // Encontrando o paciente selecionado com base no título do item
            const selectedPatient = patients.find(p => p.nome === item.title);

            // console.log("Paciente Selecionado:", selectedPatient);
            // console.log("É Apollo:", isApollo, "Valor Bruto:", selectedPatient?.paciente_apollo);

            setFormData({
                operacao: "Update",
                id: item.id,
                paciente: selectedPatient?.id_paciente || "",
                profissional: professionals.find(p => p.nome === item.subtitle)?.id_usuario || "",
                slot: item.columnId,
                data: start.toISOString().slice(0, 10),
                inicio: item.startTime.slice(11, 16),
                fim: item.endTime.slice(11, 16),
                status: item.status || "",
                paciente_apollo: item.paciente_apollo || false,
                em_lote: item.em_lote || false
            })

            // console.log("Form data:", formData)
            // console.log("Item data:", item)
        }
    }, [item, isExcluirModalOpen, patients, professionals])

    const handleChange = (e) => {
        const { name, value } = e.target

        const parsedValue = name === "paciente_apollo" || name === "em_lote" ? value === "true" : value;

        setFormData(prev => ({
            ...prev,
            [name]: parsedValue
        }))
    }

    const handleUpdate = () => {

        Streamlit.setComponentValue({
            operacao: "Update",
            id_agendamento: formData.id,
            id_paciente: formData.paciente,
            id_usuario: formData.profissional,
            id_slot: formData.slot,
            data_agendamento: formData.data,
            inicio_hora: formData.inicio,
            fim_hora: formData.fim,
            status: formData.status,
            paciente_apollo: formData.paciente_apollo,
            em_lote: false
        })

        setIsExcluirModalOpen(false)
    }*/

    return (
        <>
            <Transition appear show={isExcluirModalOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsExcluirModalOpen(false)}>
                    <div className="fixed inset-0" aria-hidden="true" />
                    <div className="fixed inset-0 flex justify-center mt-20 p-4 bg-gradient-to-t from-slate-500 to-transparent rounded-xl">
                        <Dialog.Panel className="w-full max-w-[800px] overflow-y-hidden transform rounded-2xl bg-white py-5 px shadow-2xl transition-all scroll-m-0 h-fit mt-7">
                            <div className="w-full px-5">
                                <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-semibold text-gray-700">
                                    Excluir locação
                                </h1>
                                <button className="w-fit py-3 px-4 border bg-[#c51d11] rounded-md text-md text-slate-50 font-medium shadow-sm hover:translate-y-[-4px] hover:bg-[#db2a1e] transition-all active:outline-none" onClick={handleSubmit}><FaTrash /></button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ModalExcluir;