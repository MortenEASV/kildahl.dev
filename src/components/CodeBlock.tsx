import styles from '../styles/modules/codeblock.module.scss';
import React from "react";

//Forgive me for what I'm about to do
const CodeBlock = () => {
    return (
        <article className={styles.codeblock}>
            <div className={styles.codeblock__code}>
                <pre className={styles.codeblock__white}>1</pre> <pre className={styles.codeblock__orange}>var</pre> <pre className={styles.codeblock__white}>morten = </pre><pre className={styles.codeblock__orange}>new </pre><pre className={styles.codeblock__white}>Person</pre>
                <br/>
                <pre className={styles.codeblock__white}>2 &#123;</pre>
                <br/>
                <pre className={styles.codeblock__white}>3</pre><pre className={styles.codeblock__parameter}>    Name</pre> = <pre className={styles.codeblock__string}>"Morten Kristensen"</pre>,
                <br/>
                <pre className={styles.codeblock__white}>4</pre><pre className={styles.codeblock__parameter}>    Country</pre> = <pre className={styles.codeblock__string}>"Denmark"</pre>,
                <br/>
                <pre className={styles.codeblock__white}>5</pre><pre className={styles.codeblock__parameter}>    Region</pre> = <pre className={styles.codeblock__string}>"South Jutland"</pre>,
                <br/>
                <pre className={styles.codeblock__white}>6</pre><pre className={styles.codeblock__parameter}>    Age</pre> = <pre className={styles.codeblock__int}>24</pre>
                <br/>
                <pre className={styles.codeblock__white}>7 &#125;;</pre>
                <br/>
                <pre className={styles.codeblock__white}>8 Debug.<pre className={styles.codeblock__yellow}>WriteLine</pre>(morten.<pre className={styles.codeblock__yellow}>ToString</pre>());</pre>
            </div>
        </article>
    );
};

export default CodeBlock;