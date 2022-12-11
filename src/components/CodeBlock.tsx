import styles from '../styles/modules/codeblock.module.scss';
import globalStyles from '../styles/modules/globals.module.scss'
import React from "react";

const CodeBlock = () => {
    return (
        <article className={styles.codeblock}>
            <div className={styles.codeblock__code}>
                <pre>public class Person</pre>
                <pre>&#x7b;</pre>
                <pre>    public string name &#x7b; get; set; &#x7d;</pre>
                <pre>    public List&#x3c;string&#x3e; traits &#x7b; get; set; &#x7d;</pre>
                <pre>    public int age &#x7b; get; set; &#x7d;</pre>
                <pre></pre>
                <pre>    public Person()</pre>
                <pre>    &#x7b;</pre>
                <pre>        this.name = "Anurag Hazra";</pre>
                <pre>        this.traits = new List&#x3c;string&#x3e;() &#x7b; "DESIGN", "DEV" &#x7d;;</pre>
                <pre>        this.age = DateTime.Now.Year - 2001;</pre>
                <pre>    &#x7d;</pre>
                <pre>&#x7d;</pre>
            </div>
        </article>
    );
};

export default CodeBlock;