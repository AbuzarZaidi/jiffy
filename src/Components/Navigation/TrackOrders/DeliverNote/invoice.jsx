<Box className={classes.deliveryIn}>
{invoiceData ? (
<div id="pdf">
  <Grid container ref={ref} className={classes.Invoiced}>
    <Grid
      item
      container
      xs={12}
      md={12}
      lg={12}
      className={classes.stepperIn}
    >
      <Grid container xs={6} md={6} lg={6}>
        <img src="./Images/icon.png" className="logoIn"></img>
      </Grid>
      <Grid
        container
        display="flex"
        justify="flex-end"
        xs={2}
        md={2}
        lg={2}
        className="boldIn"
      ></Grid>
      <Grid
        container
        display="flex"
        justify="flex-end"
        xs={4}
        md={4}
        lg={4}
        className="boldIn"
      >
        INVOICE
      </Grid>
     
      <Grid container xs={12} md={12} lg={12}>
      
        <div className="head"> Jiffy Delivery Services Est. </div>
      </Grid>
      <Grid container xs={12} md={12} lg={12}>
        <Grid item xs={6} md={6} lg={6}>
          <div className={classes.sec1}>
            <Grid xs={12} md={4} lg={4}>
              <span className="subtitle">Street Address</span>
            </Grid>
            <Grid xs={12} md={0.5} lg={0.5} className={classes.colon}>
              <span>:</span>
            </Grid>
            <Grid xs={12} md={8} lg={8}>
              {invoiceData && invoiceData.street_address ? (
              <span className="subValue">{invoiceData.street_address}</span>):(<></>)}
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container xs={12} md={12} lg={12}>
        <Grid item xs={6} md={6} lg={6}>
          <div className={classes.sec1}>
            <Grid xs={12} md={4} lg={4}>
              <span className="subtitle">City, P.O. Box</span>
            </Grid>
            <Grid xs={12} md={0.5} lg={0.5} className={classes.colon}>
              <span>:</span>
            </Grid>
            <Grid xs={12} md={8} lg={8}>
            {invoiceData && invoiceData.city ? (
              <span className="subValue">{invoiceData.city}</span>):(<></>)}
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container xs={12} md={12} lg={12}>
        <Grid item xs={6} md={6} lg={6}>
          <div className={classes.sec1}>
            <Grid xs={12} md={4} lg={4}>
              <span className="subtitle">Phone</span>
            </Grid>
            <Grid xs={12} md={0.5} lg={0.5} className={classes.colon}>
              <span>:</span>
            </Grid>
            <Grid xs={12} md={8} lg={8}>
              <span className="subValue">{invoiceData.phone}</span>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid container xs={12} md={12} lg={12}>
        <Grid item xs={7} md={7} lg={7}>
          <br />
          <br />
          <div className={classes.blueSec}>
            <span className={classes.whiteSec}>
              <b>Bill To</b>
            </span>
          </div>

          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6}>
              <div className={classes.sec1}>
                <Grid xs={7} md={7} lg={7}>
                  <span className="subtitle">Name</span>
                </Grid>
                <Grid
                  xs={12}
                  md={0.5}
                  lg={0.5}
                  className={classes.colon}
                >
                  <span>:</span>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                  <span className="subValue">
                    {invoiceData.bill_info.name}
                  </span>
                </Grid>
              </div>
            </Grid>
          </Grid>

          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6}>
              <div className={classes.sec1}>
                <Grid xs={7} md={7} lg={7}>
                  <span className="subtitle">Company Name</span>
                </Grid>
                <Grid
                  xs={12}
                  md={0.5}
                  lg={0.5}
                  className={classes.colon}
                >
                  <span>:</span>
                </Grid>
               
                  <span className="subValue">
                  {invoiceData.bill_info.company_name}
                  </span>
           
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6}>
              <div className={classes.sec1}>
                <Grid xs={7} md={7} lg={7}>
                  <span className="subtitle">Street Address</span>
                </Grid>
                <Grid
                  xs={12}
                  md={0.5}
                  lg={0.5}
                  className={classes.colon}
                >
                  <span>:</span>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                  <span className="subValue">
                  {invoiceData.bill_info.street_address}
                  </span>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6}>
              <div className={classes.sec1}>
                <Grid xs={7} md={7} lg={7}>
                  <span className="subtitle">City, P.O. Box</span>
                </Grid>
                <Grid
                  xs={12}
                  md={0.5}
                  lg={0.5}
                  className={classes.colon}
                >
                  <span>:</span>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                  <span className="subValue">
                  {invoiceData.bill_info.city}
                  </span>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6}>
              <div className={classes.sec1}>
                <Grid xs={7} md={7} lg={7}>
                  <span className="subtitle">Phone</span>
                </Grid>
                <Grid
                  xs={12}
                  md={0.5}
                  lg={0.5}
                  className={classes.colon}
                >
                  <span>:</span>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                  <span className="subValue">
                  {invoiceData.bill_info.phone}
                  </span>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6}>
              <div className={classes.sec1}>
                <Grid xs={7} md={7} lg={7}>
                  <span className="subtitle">Email Address</span>
                </Grid>
                <Grid
                  xs={12}
                  md={0.5}
                  lg={0.5}
                  className={classes.colon}
                >
                  <span>:</span>
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                  <span className="subValue">
                  {invoiceData.bill_info.email}
                  </span>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} md={1} lg={1}>
          <br />
          <br />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <br />
          <br />
          <div className={classes.blueSec}>
            <Grid container xs={12} md={12} lg={12}>
              <Grid item xs={6} md={6} lg={6}>
                <span className={classes.whiteSec}>
                  <b>Invoice#</b>
                </span>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <span className={classes.whiteSec}>
                  <b>Date</b>
                </span>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container xs={12} md={12} lg={12}>
              <Grid item xs={6} md={6} lg={6}>
                <span className="subValue">{invoiceData.invoice_no}</span>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <span className="subValue">{invoiceData.date}</span>
              </Grid>
            </Grid>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className={classes.blueSec}>
            <Grid container xs={12} md={12} lg={12}>
              <Grid item xs={6} md={6} lg={6}>
                <span className={classes.whiteSec}>
                  <b>Customer ID</b>
                </span>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <span className={classes.whiteSec}>
                  <b>Immigo Case No</b>
                </span>
              </Grid>
            </Grid>
            <br />
            <br />

            <Grid container xs={12} md={12} lg={12}>
              <Grid item xs={6} md={6} lg={6}>
                <span className="subValue">

                </span>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <span className="subValue">

                </span>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <br />
          <br />
          <div className={classes.blueSecDesc}>
            <Grid item xs={7} md={7} lg={7}>
              <span className={classes.whiteSec}>
                <b>Description</b>
              </span>
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <span className={classes.whiteSec}>
                <b>Unit</b>
              </span>
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <span className={classes.whiteSec}>
                <b>Amount</b>
              </span>
            </Grid>
          </div>
          <div>
          <Grid item xs={12} md={12} lg={12} className={classes.documentContainer}>
                       
                        {/*<Table sx={{ minWidth: 650 }} aria-label="simple table" className={classes.documentTable}>
                           
                            <TableBody>
                               
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" className={classes.tableCellItem}>1</TableCell>
                                        <TableCell align="left" className={classes.tableCellItem}>ggf</TableCell>
                                        <TableCell align="left" className={classes.tableCellItem}>Passport</TableCell>
                                    </TableRow>
                              
                               
                            </TableBody>
            </Table>*/}
                        
                        </Grid>

          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <br />
          <br />

          <div className="stamp">
            <span className={classes.stamped}>
              For Jiffy Delivery Services Est.
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <br />

          <div className="stamp">
            <span>
              <img src="./Images/stamp.svg"></img>
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <div className="thanku">
            <span className={classes.thanked}>
              Thank You for Your Business!
            </span>
          </div>
        </Grid>
      </Grid>
    </Grid>
   
  </Grid>
</div>):(<></>)}
</Box>