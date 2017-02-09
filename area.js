/**
 * Created by abc on 08/02/2017.
 */

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("munsi.db");

db.serialize(function () {

    var tableArea = "CREATE TABLE IF NOT EXISTS AREA( " +
        "ID                     INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "AREA_ID                INTEGER, " +
        "AREA                   INTEGER, " +
        "CREATED_BY             INTEGER, " +
        "UPDATED_BY             INTEGER, " +
        "CREATED_TS             TEXT, " +
        "UPDATED_TS             TEXT)";
    db.run(tableArea);


    var combiDetail = "CREATE TABLE IF NOT EXISTS COMBIDETAIL( " +
        "ID                     INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "CPID                   INTEGER, " +
        "COMBI_PROD_ID          INTEGER, " +
        "SR                     TEXT, " +                   // TODO
        "PROD_ID                INTEGER, " +
        "PROD_DES               TEXT, " +               // TODO
        "QTY                    INTEGER, " +                 // TODO
        "CREATED_BY             INTEGER, " +
        "UPDATED_BY             INTEGER, " +
        "CREATED_TS             TEXT, " +
        "UPDATED_TS             TEXT)";
    db.run(combiDetail);


    var crateGl = "CREATE TABLE IF NOT EXISTS CRATE_GL( " +
        "ID                     INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "C_DATE                 TEXT, " +
        "CUST_ID                INTEGER, " +
        "SRC_ENT                INTEGER, " +                   // TODO
        "OP_QTY                 INTEGER, " +
        "SUP_QTY                INTEGER, " +               // TODO
        "RET_QTY                INTEGER, " +                 // TODO
        "CREATED_BY             INTEGER, " +
        "UPDATED_BY             INTEGER, " +
        "CREATED_TS             TEXT, " +
        "UPDATED_TS             TEXT)";
    db.run(crateGl);


    var dc = "CREATE TABLE IF NOT EXISTS DC( " +
        "ID                     INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DC_NO                  INTEGER, " +
        "DC_DATE                TEXT, " +
        "CUST_CODE              TEXT, " +
        "O_NO                   INTEGER, " +
        "O_DATE                 TEXT, " +
        "AREA                   INTEGER, " +
        "S_MAN                  TEXT, " +
        "VAN                    TEXT, " +
        "GROSS_TOT              REAL, " +
        "SCHEME1_TOT            REAL, " +
        "SCHEME2_TOT            REAL, " +
        "DMG_TOT                REAL, " +
        "DESC                   REAL, " +
        "AD                     REAL, " +
        "LS                     REAL, " +
        "R_OFF                  INTEGER, " +
        "FIN_AMT                REAL, " +
        "REMARK                 TEXT, " +
        "COLL_TYPE              TEXT, " +
        "COLL_DATE              TEXT, " +
        "COLL_AMT1              REAL, " +
        "COLL_AMT2              REAL, " +
        "DEP_IN                 TEXT, " +
        "CHQ_NO                 INTEGER, " +
        "CHQ_DATE               TEXT, " +
        "DRAWEE_BANK            TEXT, " +
        "BRANCH                 TEXT, " +
        "CLEARING               TEXT, " +
        "CREATED_BY             INTEGER, " +
        "UPDATED_BY             INTEGER, " +
        "CREATED_TS             TEXT, " +
        "UPDATED_TS             TEXT)";
    db.run(dc);

    var dcDetail = "CREATE TABLE IF NOT EXISTS DCDETAIL( " +
        "ID                     INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DCD_ID                 INTEGER, " +
        "DC_NO                  INTEGER, " +
        "SR_NO                  INTEGER, " +
        "PROD_CODE              TEXT, " +
        "PROD_DS                TEXT, " +
        "PACKAGING              TEXT, " +
        "RATE                   REAL, " +
        "QTY                    INTEGER, " +
        "BOX                    INTEGER, " +
        "FREE                   REAL, " +
        "SCH1                   REAL, " +
        "SCHEME1                REAL, " +
        "SCH2                   REAL, " +
        "SCHEME2                REAL, " +
        "REPL                   INTEGER, " +
        "DMG                    REAL, " +
        "DMG_MRP                REAL, " +
        "DMG_AMT                REAL, " +
        "AMT                    REAL, " +
        "BATCH_NO               INTEGER, " +
        "MRP                    REAL, " +
        "RET_QTY                INTEGER, " +
        "CREATED_BY             INTEGER, " +
        "UPDATED_BY             INTEGER, " +
        "CREATED_TS             TEXT, " +
        "UPDATED_TS             TEXT)";
    db.run(dcDetail);

    var dcpmDetail = "CREATE TABLE IF NOT EXISTS DCPMDETAIL( " +
        "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DCPMD_ID            INTEGER, " +
        "SR_NO               INTEGER, " +
        "PROD_CODE           TEXT, " +
        "SIZE                INTEGER, " +
        "RATE                REAL, " +
        "QTY                 INTEGER, " +
        "FREE                INTEGER, " +
        "RYPL                INTEGER, " +
        "PUR_ID              INTEGER, " +
        "P_DATE              TEXT, " +
        "S_NAME              TEXT, " +
        "INV_NO              INTEGER, " +
        "GROSS_TOT           REAL, " +
        "SCHEME1             REAL, " +
        "SCHEME2             REAL, " +
        "OCT_FRGHT           REAL, " +                      // TODO
        "APMC                REAL, " +                             // TODO
        "CR_AMT              REAL, " +
        "DISC                REAL, " +
        "TAX_AMT             REAL, " +
        "AD                  REAL, " +
        "LS                  REAL, " +
        "RO_OFF              INTEGER, " +
        "FIN_AMT             REAL, " +
        "REMARK              TEXT, " +
        "TAX_AGAINST         TEXT, " +
        "X1                  TEXT, " +
        "X2                  TEXT, " +
        "X3                  TEXT, " +
        "X4                  TEXT, " +
        "PAID_AMT            REAL, " +
        "REF_NO              INTEGER, " +
        "CREATED_BY          INTEGER, " +
        "UPDATED_BY          INTEGER, " +
        "CREATED_TS          TEXT, " +
        "UPDATED_TS          TEXT)";
    db.run(dcpmDetail);

    var dcPurDetail = "CREATE TABLE IF NOT EXISTS DC_PUR_DETAIL( " +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "PROD_ID               INTEGER, " +
        "PUR_ID                INTEGER, " +
        "SR_NO                 INTEGER, " +
        "PROD_CODE             TEXT, " +
        "PROD_DS               TEXT, " +
        "RATE                  REAL, " +
        "BOX                   INTEGER, " +
        "QTY                   INTEGER, " +
        "TAX                   REAL, " +
        "FREE                  INTEGER, " +
        "SCH1                  REAL, " +
        "SCHEME1               REAL, " +
        "SCH2                  REAL, " +
        "SCHEME2               REAL, " +
        "AMT                   REAL, " +
        "TAX_AMT               REAL, " +
        "BACH_NO               INTEGER, " +
        "CREATED_BY            INTEGER, " +
        "UPDATED_BY            INTEGER, " +
        "CREATED_TS            TEXT, " +
        "UPDATED_TS            TEXT)";
    db.run(dcPurDetail);


    var dcsmDetail = "CREATE TABLE IF NOT EXISTS DCSM_DETAIL( " +
        "ID                    INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DCSMD_ID              INTEGER, " +
        "DC_NO                 INTEGER, " +
        "SR_NO                 INTEGER, " +
        "PROD_CODE             TEXT, " +
        "SIZE                  INTEGER, " +
        "RATE                  REAL, " +
        "QTY                   INTEGER, " +
        "FREE                  INTEGER, " +
        "REPL                  INTEGER, " +
        "DMG                   REAL, " +
        "DMG_MRP               REAL, " +
        "DMG_AMT               REAL, " +
        "RET_QTY               INTEGER, " +
        "CREATED_BY            INTEGER, " +
        "UPDATED_BY            INTEGER, " +
        "CREATED_TS            TEXT, " +
        "UPDATED_TS            TEXT)";
    db.run(dcsmDetail);


    var desp = "CREATE TABLE IF NOT EXISTS DESP( " +
        "ID                    INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DESP_ID               INTEGER, " +
        "DESP_DETAIL           TEXT, " +
        "CREATED_BY            INTEGER, " +
        "UPDATED_BY            INTEGER, " +
        "CREATED_TS            TEXT, " +
        "UPDATED_TS            TEXT)";
    db.run(desp);


    var gl = "CREATE TABLE IF NOT EXISTS GL1( " +
        "ID                    INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "GL_ID                 INTEGER, " +
        "GL_DATE               TEXT, " +
        "GL_BY                 TEXT, " +
        "GL_TO                 TEXT, " +
        "S_REF                 INTEGER, " +
        "P_REF                 INTEGER, " +
        "AMT                   REAL, " +
        "SRC_ENT               TEXT, " +
        "CLEARING              TEXT, " +
        "CHQ_DATE              TEXT, " +
        "REMARKS1              TEXT, " +
        "REMARKS2              TEXT, " +
        "SP_REF                TEXT, " +
        "NOS                    INTEGER, " +
        "CREATED_BY            INTEGER, " +
        "UPDATED_BY            INTEGER, " +
        "CREATED_TS            TEXT, " +
        "UPDATED_TS            TEXT)";
    db.run(gl);

    var inv1 = "CREATE TABLE IF NOT EXISTS INV1( " +
        "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "INV_NO              INTEGER, " +
        "I_DATE              TEXT, " +
        "CUST_CODE           TEXT, " +
        "O_NO                INTEGER, " +
        "O_DATE              TEXT, " +
        "AREA                INTEGER, " +
        "S_MAN               TEXT, " +
        "VAN                 TEXT, " +
        "GROSS_TOT           REAL, " +
        "SCHEME1_TOT         REAL, " +
        "SCHEME2_TOT         REAL, " +
        "TEX_TOT             REAL, " +
        "DMG_TOT             REAL, " +
        "DISC                REAL, " +
        "DISC_AMT            REAL, " +
        "AD                  REAL, " +
        "LS                  REAL, " +
        "R_OFF               INTEGER, " +
        "FIN_AMT             REAL, " +
        "REMARKS             TEXT, " +
        "TEXT_AGAINST        REAL, " +
        "X1                  TEXT, " +
        "X2                  TEXT, " +
        "X3                  TEXT, " +
        "X4                  TEXT, " +
        "X5                  TEXT, " +
        "COLL_TYPE           TEXT, " +              // TODO
        "COLL_DATE           TEXT, " +
        "COLL_AMT1           REAL, " +
        "COLL_AMT2           REAL, " +
        "DEP_IN              TEXT, " +
        "CHQ_NO              INTEGER, " +
        "CHQ_DATE            INTEGER, " +
        "DRAWEE_BANK         TEXT, " +
        "BRANCH              TAXT, " +
        "CLEARING            TEXT, " +
        "CREATED_BY          INTEGER, " +
        "UPDATED_BY          INTEGER, " +
        "CREATED_TS          TEXT, " +
        "UPDATED_TS          TEXT)";
    db.run(inv1);


     var inv2 = "CREATE TABLE IF NOT EXISTS INV2( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "INV_ID              INTEGER, " +
     "INV_NO              INTEGER, " +
     "SR_NO               INTEGER, " +
     "PROD_CODE           TEXT, " +
     "PROD_DES            TEXT, " +
     "PACKAGING           TEXT, " +                 // TODO
     "BOX                 INTEGER, " +
     "FREE                INTEGER, " +
     "SCH1                REAL, " +
     "SCHEME1             REAL, " +
     "SCH2                REAL, " +
     "SCHEME2             REAL, " +
     "REPL                INTEGER, " +
     "DMG                 INTEGER, " +
     "DMG_MRP             REAL, " +
     "DMG_AMT             REAL, " +
     "AMT                 REAL, " +
     "TEX                 REAL, " +
     "TEX_AMT             REAL, " +
     "BATCH_NO            INTEGER, " +
     "MRP                 REAL, " +
     "RET_QTY             INTEGER, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(inv2);


     var invDetail2 = "CREATE TABLE IF NOT EXISTS INVDETAIL2( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "INV_detail2         text, " +
     "INV_NO              INTEGER, " +
     "I_DATE              TEXT, " +
     "DISP_CODE           TEXT, " +                  // TODO
     "DISP_AMT            REAL, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(invDetail2);


     var invmDetail = "CREATE TABLE IF NOT EXISTS INVMDETAIL( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "INVMD_ID            INTEGER, " +
     "INV_NO              INTEGER, " +
     "SR_NO               INTEGER, " +
     "PROD_CODE           TEXT, " +                  // TODO
     "SIZE                REAL, " +                 // TODO
     "RATE                REAL, " +
     "QTY                 INTEGER, " +
     "FREE                INTEGER, " +
     "REPL                INTEGER, " +
     "DMG                 REAL, " +                    // TODO
     "DMG_MRP             REAL, " +
     "DMG_AMT             REAL, " +
     "RET_QTY             INTEGER, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(invmDetail);


     var invNo = "CREATE TABLE IF NOT EXISTS INVNO( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "NOS                 INTEGER, " +
     "INV_MESSAGE         TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(invNo);


     var payC = "CREATE TABLE IF NOT EXISTS PAYC( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PAY_C               INTEGER, " +
     "P_DATE              TEXT, " +
     "PC_BY               TEXT, " +
     "PC_TO               TEXT, " +
     "AMT                 REAL, " +
     "PAY_REF             TEXT, " +                     // TODO
     "PAY_SLIP            TEXT, " +
     "CH_NO               INTEGER, " +
     "CH_DATE             INTEGER, " +
     "BNK                 TEXT, " +
     "BACH                TEXT, " +
     "RMK1                TEXT, " +
     "RMK2                TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(payC);


     var po = "CREATE TABLE IF NOT EXISTS PO( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PO_NO               INTEGER, " +
     "PO_DATE             TEXT, " +
     "S_NAME              TEXT, " +
     "INV_NO              TEXT, " +
     "GROSS_TOT           REAL, " +
     "SCHEME1             REAL, " +
     "SCHEME2             REAL, " +
     "OCT_FRGHT           TEXT, " +                     // TODO
     "AP_MC               REAL, " +
     "CR_AMT              REAL, " +
     "DISC                REAL, " +
     "TEX_AMT             REAL, " +
     "AD                  REAL, " +
     "LS                  REAL, " +
     "R_OFF               INTEGER, " +
     "FIN_AMT             REAL, " +
     "REMARKS             TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(po);


     var poDetail = "CREATE TABLE IF NOT EXISTS PODETAIL( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "POD_ID              INTEGER, " +
     "PO_NO               INTEGER, " +
     "SR_NO               INTEGER, " +
     "PROD_CODE           TEXT, " +                     // TODO
     "PROD_DES            TEXT, " +
     "RATE                REAL, " +
     "BOX                 INTEGER, " +
     "QTY                 INTEGER, " +
     "TEX                 REAL, " +
     "FREE                INTEGER, " +
     "SCH1                REAL, " +
     "SCHEME1             REAL, " +
     "SCH2                REAL, " +
     "SCHEME2             REAL, " +
     "AMT                 REAL, " +
     "TEX_AMT             REAL, " +
     "BATCH_NO            TEXT, " +                     // TODO
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(poDetail);


     var pomDetail = "CREATE TABLE IF NOT EXISTS POMDETAIL( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "POMD_ID             INTEGER, " +
     "PO_NO               INTEGER, " +
     "SR_NO               INTEGER, " +
     "PROD_CODE           TEXT, " +                     // TODO
     "SIZE                TEXT, " +                     // TODO
     "RATE                REAL, " +
     "QTY                 INTEGER, " +
     "FREE                INTEGER, " +
     "REPL                INTEGER, " +                   // TODO
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(pomDetail);


     var prevRate = "CREATE TABLE IF NOT EXISTS PREVRATE( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PR_ID               INTEGER, " +
     "SAC_ID              TEXT, " +
     "PROD_CODE           TEXT, " +                     // TODO
     "BATCH_NO            INTEGER, " +                     // TODO
     "MRP                 REAL, " +
     "S_RATE              REAL, " +
     "FREE                INTEGER, " +
     "REPL                INTEGER, " +                   // TODO
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(prevRate);


     var prod = "CREATE TABLE IF NOT EXISTS PROD( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PROD_ID             INTEGER, " +
     "DESCRIPTION         TEXT, " +
     "WEIGHT              REAL, " +                 //TODO
     "PRODM_GROUP         TEXT, " +
     "PRODS_GROUP         TEXT, " +
     "SALE_UNIT           INTEGER, " +                 // TODO
     "PUR_UNIT            INTEGER, " +                 // TODO
     "PACK                INTEGER, " +
     "OUTER               INTEGER, " +
     "VAT_TYPE            REAL, " +
     "APMC                REAL, " +
     "PACKAGING           TEXT, " +                     // TODO
     "OP_STOCK            REAL, " +                     // TODO
     "BATCH_NO            INTEGER, " +
     "MRP                 REAL, " +
     "S_RATE              REAL, " +
     "P_RATE              REAL, " +
     "MARGIN              REAL, " +
     "P_LOCK              TEXT, " +
     "MIN_QTY             INTEGER, " +
     "MFG_DATE            TEXT, " +
     "EXP_DATE            TEAT, " +
     "X1                  TEXT, " +
     "X2                  TEXT, " +
     "X3                  TEXT, " +
     "X4                  TEXT, " +
     "X5                  TEAT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(prod);


     var prodLoc = "CREATE TABLE IF NOT EXISTS PRODLOC( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PROD_LOC            TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(prodLoc);



     var prodmGroup = "CREATE TABLE IF NOT EXISTS PRODMGROUP( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PRODM_ID            INTEGER, " +
     "MAIN_GROUP          TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(prodmGroup);


     var prodsGroup = "CREATE TABLE IF NOT EXISTS PRODSGROUP( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PRODS_ID            INTEGER, " +
     "PRODS_GROUP         TEXT, " +
     "PRODM_GROUP         TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(prodsGroup);


     var pur = "CREATE TABLE IF NOT EXISTS PUR( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PUR_ID              INTEGER, " +
     "P_DATE              TEXT, " +
     "S_NAME              TEXT, " +
     "INV_NO              INTEGER, " +
     "GROSS_TOT           REAL, " +
     "SCHEME1             REAL, " +
     "SCHEME2             REAL, " +
     "OCT_FRGHT           TEXT, " +                  // TODO
     "APMC                REAL, " +
     "CR_AMT              REAL, " +
     "DISC                REAL, " +
     "TEX_AMT             REAL, " +
     "AD                  REAL, " +
     "LS                  REAL, " +
     "R_OFF               INTEGER, " +
     "FIN_AMT             REAL, " +
     "REMARKS             TEXT, " +
     "TEXT_AGAINST        REAL, " +
     "X1                  TEXT, " +
     "X2                  TEXT, " +
     "X3                  TEXT, " +
     "X4                  TEXT, " +
     "X5                  TEXT, " +
     "PAID_AMT            REAL, " +
     "REF                 INTEGER, " +
     "PAID_AMT1           REAL, " +
     "PAY_TYPE            TEXT, " +
     "PAY_DATE            TEXT, " +
     "BANK_NAME           TEXT, " +
     "CH_NO               INTEGER, " +
     "CH_DATE             TEXT, " +
     "PO_NO               INTEGER, " +
     "PO_DATE             TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(pur);


     var purDetail = "CREATE TABLE IF NOT EXISTS PURDETAIL( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PURD_ID             INTEGER, " +
     "PUR_ID              INTEGER, " +
     "SR_NO               INTEGER, " +
     "PROCODE             INTEGER, " +                // TODO
     "PROD_DES            TEXT, " +
     "RATE                REAL, " +
     "BOX                 INTEGER, " +
     "QTY                 REAL, " +                  // TODO
     "TEX                 REAL, " +
     "FREE                INTEGER, " +
     "SCH1                REAL, " +
     "SCHEME1             REAL, " +
     "SCH2                REAL, " +
     "SCHEME2             REAL, " +
     "AMT                 REAL, " +
     "TEX_AMT             REAL, " +
     "BATCH_NO            INTEGER, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(purDetail);


     var purmDetail = "CREATE TABLE IF NOT EXISTS PURMDETAIL( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "PURMD_ID             INTEGER, " +
     "PUR_ID              INTEGER, " +
     "SR_NO               INTEGER, " +
     "PROD_CODE           TEXT, " +                // TODO
     "SIZE                INTEGER, " +
     "RATE                REAL, " +
     "QTY                 REAL, " +                  // TODO
     "FREE                INTEGER, " +              // TODO
     "REPL                REAL, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(purmDetail);


     var remarks = "CREATE TABLE IF NOT EXISTS REMARKS( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "REMARKS             TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(remarks);


     var sac = "CREATE TABLE IF NOT EXISTS SAC( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "SAC_ID              INTEGER, " +
     "MAC_ID              TEXT, " +
     "S_NAME              TEXT, " +
     "S_ADD1              TEXT, " +
     "S_ADD2              TEXT, " +
     "S_ADD3              TEXT, " +
     "CITY                TEXT, " +
     "PIN                 INTEGER, " +
     "TEL1                INTEGER, " +
     "TEL2                INTEGER, " +
     "EMAIL               TEXT, " +
     "CONTACT             TEXT, " +
     "MRP                 REAL, " +
     "KEY                 TEXT, " +                     //TODO
     "AREA                TEXT, " +
     "CATEGORY            TEXT, " +                    //TODO
     "DISCOUNT            REAL, " +
     "CREDIT_DAYS         INTEGER, " +
     "CREDIT_LIMIT        REAL, " +
     "VAT                 INTEGER, " +
     "CST                 INTEGER, " +
     "CESS                INTEGER, " +
     "DL1                 INTEGER, " +
     "DL2                 INTEGER, " +
     "DL3                 INTEGER, " +
     "FASSAI_NO           INTEGER, " +
     "FL                  INTEGER, " +
     "REMARK              TEXT, " +
     "OP_BEL              REAL, " +
     "DB_AMT              REAL, " +
     "CR_AMT              REAL, " +
     "BANK                TEXT, " +
     "BRANCH              TEXT, " +
     "X1                  TEXT, " +
     "X2                  TEXT, " +
     "X3                  TEXT, " +
     "X4                  TEXT, " +
     "X5                  TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(sac);


     var sMan = "CREATE TABLE IF NOT EXISTS SMAN( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "SM_ID               INTEGER, " +
     "SALES_MAN           TEXT, " +
     "SLSM_ID             TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(sMan);


     var so = "CREATE TABLE IF NOT EXISTS SO( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "SO_NO               INTEGER, " +
     "SO_DATE             TEXT, " +
     "CUST_CODE           INTEGER, " +
     "O_NO                INTEGER, " +
     "O_DARE              TEXT, " +
     "AREA                TEXT, " +
     "S_MAN               TEXT, " +
     "VAN                 TEXT, " +
     "GROSS_TOT           REAL, " +
     "SCHEME1_TOT         REAL, " +
     "SCHEME2_TOT         REAL, " +
     "TEX_TOT             REAL, " +
     "DMG_TOT             REAL, " +
     "DISC                REAL, " +
     "DISC_AMT            REAL, " +
     "AD                  REAL, " +
     "R_OFF               INTEGER, " +
     "FIN_AMT             REAL, " +
     "REMARKS             TEXT, " +
     "X1                  TEXT, " +
     "X2                  TEXT, " +
     "X3                  TEXT, " +
     "X4                  TEXT, " +
     "X5                  TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(so);


     var soDetail = "CREATE TABLE IF NOT EXISTS SODETAIL( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "SOD_ID              INTEGER, " +
     "SO_NO               INTEGER, " +
     "SR_NO               INTEGER, " +
     "PROD_CODE           TEXT, " +                  //TODO
     "PROD_DES            TEXT, " +
     "PACKAGING           TEXT, " +                    //TODO
     "RATE                REAL, " +
     "QTY                 INTEGER, " +
     "BOX                 INTEGER, " +
     "FREE                REAL, " +
     "SCH1                REAL, " +
     "SCHEME1             REAL, " +
     "SCH2                REAL, " +
     "SCHEME2             REAL, " +
     "REPL                INTEGER, " +
     "DMG                 INTEGER, " +
     "DMG_MRP             REAL, " +
     "DMG_AMT             REAL, " +
     "AMT                 REAL, " +
     "TAX                 REAL, " +
     "TAX_AMT             REAL, " +
     "BATCH_NO            INTEGER, " +
     "MRP                 REAL, " +
     "RET_QTY             INTEGER, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(soDetail);


     var so_detail2 = "CREATE TABLE IF NOT EXISTS SODETAIL2( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "SODET_ID            INTEGER, " +
     "SO_NO               INTEGER, " +
     "SO_DATE             TEXT, " +
     "DISP_CODE           INTEGER, " +                // TODO
     "DISP_AMT            REAL, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(so_detail2);


     var somDetail = "CREATE TABLE IF NOT EXISTS SOMDETAIL( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "SOMD_ID             INTEGER, " +
     "SO_NO               INTEGER, " +
     "SR_NO               INTEGER, " +
     "PROD_CODE           TEXT, " +                  //TODO
     "SIZE                INTEGER, " +
     "RATE                REAL, " +
     "QTY                 INTEGER, " +
     "FREE                REAL, " +
     "REPL                INTEGER, " +
     "DMG                 INTEGER, " +
     "DMG_MRP             REAL, " +
     "DMG_AMT             REAL, " +
     "RET_QTY             INTEGER, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(somDetail);


     var stk = "CREATE TABLE IF NOT EXISTS STK( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "STK_ID              INTEGER, " +
     "PROD_ID             INTEGER, " +
     "PROD_NAME           TEXT, " +
     "BATCH               INTEGER, " +
     "OP_STK              REAL, " +
     "MRP                 REAL, " +
     "SALE_RATE           REAL, " +
     "PUR_RATE            REAL, " +
     "LOCK                INTEGER, " +
     "PACK                INTEGER, " +
     "P_QTY               INTEGER, " +
     "S_QTY               INTEGER, " +
     "MFG_DATE            TEXT, " +
     "EXP_DATE            TEXT, " +
     "X1                  TEXT, " +
     "X2                  TEXT, " +
     "X3                  TEXT, " +
     "X4                  TEXT, " +
     "X5                  TEXT, " +
     "RET_QTY             INTEGER, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(stk);


     var van = "CREATE TABLE IF NOT EXISTS VAN( " +
     "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
     "VAN_ID              INTEGER, " +
     "VAN_DETAIL          TEXT, " +
     "CREATED_BY          INTEGER, " +
     "UPDATED_BY          INTEGER, " +
     "CREATED_TS          TEXT, " +
     "UPDATED_TS          TEXT)";
     db.run(van);


});

db.close();
