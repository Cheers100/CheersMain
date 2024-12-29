interface ButtonType {
    label: string
    type?: "button" | "submit" | "reset"
    onBtnClick?: () => void
    className?: string
}

export default ButtonType