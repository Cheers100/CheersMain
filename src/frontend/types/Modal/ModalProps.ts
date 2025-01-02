export default interface ModalProps{
    title: string
    text: string
    onClose: () => void
    show: boolean
}