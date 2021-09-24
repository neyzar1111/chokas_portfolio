
function Contacts() {
    return (
        <div id="contacts">
            <div className="form_wrapper">
                <h3>Say Hello!</h3>
                <form className="form_contact">
                    <p>
                        <label>Name</label>
                        <input type="text" name='name'/>
                    </p>
                    <p>
                        <label>E-mail</label>
                        <input type="e-mail" name='e-mail'/>
                    </p>
                    <p>
                        <label>Message</label>
                        <textarea type="message" rows="5" name='message'></textarea>
                    </p>
                    <p>
                        <button >Submit</button>
                    </p>


                </form>

            </div>
        </div>
    );
}

export default Contacts;