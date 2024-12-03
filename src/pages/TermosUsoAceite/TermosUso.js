import styles from './TermosUso.module.css';

function TermosUso({ isOpen }) {
    return (
        <div className={`${styles.container} ${isOpen ? styles.small : ''}`}>
            <h3>Termos de Uso</h3>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, orci eu ullamcorper fermentum, dolor nunc faucibus lectus, sed efficitur neque felis vel erat. Donec vel nunc vel massa vestibulum scelerisque non ut est. Sed auctor, est non convallis laoreet, ipsum risus varius erat, id luctus nunc neque at velit. Nullam ullamcorper dui at dui consectetur, in condimentum velit gravida. Nullam auctor ex at est vulputate, vitae ultricies neque finibus. Nulla facilisi. Sed bibendum, neque vel egestas fermentum, risus nunc tempus lectus, ut fermentum lorem ipsum a massa.</p>
        </div>
    );
}

export default TermosUso;
