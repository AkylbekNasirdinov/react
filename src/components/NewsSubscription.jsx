export default function NewsSubscription(){
    return (<form style={{ display: 'flex', flexDirection: 'row', marginTop:'150px'}}
                  className="align-items-center justify-content-md-center">
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" style={{width: '400px'}} id="exampleInputEmail1"
                   aria-describedby="emailHelp"/>
        </div>

        <button type="submit" className="btn btn-primary"
                style={{marginLeft: '100px',  marginTop: '15px'}}>Подписаться на
            канал
        </button>
    </form>)
}