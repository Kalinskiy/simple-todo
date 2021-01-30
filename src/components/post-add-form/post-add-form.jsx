import React, {useState} from 'react';
import './post-add-form.sass'
import Alert from "reactstrap/es/Alert";

const PostAddForm = ({onAddItem}) => {

    const [error, setError] = useState(false)
    const [value, setValue] = useState('')

    const onAddItemHandle = (e) => {
        e.preventDefault()
        if (!value) {
          //  setError(true)
        } else {
            onAddItem(value)
            setError(false)
            setValue('')
        }
    }
    const onKeyAddHandle = (e) => {
        if (e.charCode === 13 && value) {
            onAddItem(value)
            setError(false)
            setValue('')
        }
        if (!value) {
            //  setError(true)
        }
    }

    return (
        <>
            <form
                onSubmit={onAddItemHandle}
                className='bottom-panel d-flex'>
                <input
                    onKeyPress={onKeyAddHandle}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    className='form-control new-post-label'
                    placeholder='О чем вы думаете сейчас? '
                    type="text"
                />

                <button
                    //onClick={onAddItemHandle}
                    type='submit'
                    className='btn btn-outline-secondary'>
                    добавить
                </button>

            </form>
            {error && <Alert color="danger">Fill the field!</Alert>}
        </>
    );
};

export default PostAddForm;