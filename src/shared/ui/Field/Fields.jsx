import styles from './Field.module.scss';

const Fields = ({className = '', id, label, type='text', onInput, value, ref, error}) => {
    return (
        <div className={`${styles.field} ${className}`}>
            <label
                className={styles.label}
                htmlFor={id}
            >
               {label}
            </label>
            <input
                className={`${styles.input} ${error ? styles.isInvalid : ''}`}
                id={id}
                placeholder=" "
                autoComplete="off"
                type={type}
                onInput={onInput}
                value={value}
                ref={ref}
            />
            {error && <div className={styles.error} title={error} >{error}</div>}
        </div>
    );
};

export default Fields;