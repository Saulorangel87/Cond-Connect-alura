import { IconButton } from "../IconButton"
import { Spinner } from "../Spinner"
import { IconThumbsUp } from "../icons/IconThumbsUp"

export const ThumbsUpButton = ({ loading, ...props }) => {
    return (
        <IconButton disabled={loading} {...props}>
            { loading ? <Spinner /> : <IconThumbsUp /> }
        </IconButton>
    )
}