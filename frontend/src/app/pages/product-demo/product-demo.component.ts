import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

import { TrailstudioService } from '../../trailstudio.service'
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { ActivatedRoute } from "@angular/router";
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'product-demo',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-demo.component.html',
  styleUrls: ['./product-demo.component.scss']
})
export class ProductDemoComponent implements OnInit {

  productDemosForm: FormGroup;
  customerInfo: any;
  projects: any;
  update: any;
  demo: any;
  demoDt: any;
  projectName: any;
  projectDt: any;
  q1: any;
  q2: any;
  q3: any;
  q4: any;



  constructor(private trailstudio: TrailstudioService, private formBuilder: FormBuilder, public toastrService: ToastrService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.update = false;
    this.initilizeProductDemos();
    this.getAllCustomerDetails();
    this.getAllProjects();
    this.getDemo();
    this.route.queryParams.subscribe(paramsId => {
      this.demo = paramsId.demoid;
      if (paramsId.demoid) {
        this.trailstudio
          .getDemoDetails(this.demo)
          .subscribe((data) => {
            this.trailstudio
              .getDemo()
              .subscribe((data) => {
                console.log("This is demo data: ", data);
                this.demoDt = data;
                this.productDemosForm = this.formBuilder.group({
                  projectId: [this.demoDt[0].projectid],
                  customerId: [this.demoDt[0].customer_id],
                  customerName: [this.demoDt[0].customer_name],
                  SCRMNumber: [this.demoDt[0].SCRM_number],
                  expectedPOValue: [this.demoDt[0].expected_PO_value],
                  CPEType: [this.demoDt[0].CPE_type],
                  CPENumber: [this.demoDt[0].CPE_number],
                  expectedCPEPrice: [this.demoDt[0].expected_CPE_price],
                  CPEYearlyGrowth: [this.demoDt[0].CPE_yearly_growth],
                  expectedPOCDate: [this.demoDt[0].expected_POC_date],
                  expectedDeploymentDate: [this.demoDt[0].expected_deployment_date],
                  VANServiceFlag: [this.demoDt[0].VAN_service_flag],
                  CEIntegrationFlag: [this.demoDt[0].CE_integration_flag],
                  DCFlag: [this.demoDt[0].DC_flag],
                  underlaylink: [this.demoDt[0].underlink_provider_flag],
                  interestedProduct: [this.demoDt[0].interested_product],
                  demoedProduct: [this.demoDt[0].demoed_product],
                  demoDate: [this.demoDt[0].demo_date],
                  webExUrl: [this.demoDt[0].webex_url],
                  noOfSites: [this.demoDt[0].no_of_sites],
                  demoSalesEngineer: [this.demoDt[0].demo_sales_engineer],
                  IPCCResource: [this.demoDt[0].ipcc_resource],
                  accountManager: [this.demoDt[0].account_manager],
                  competitor: [this.demoDt[0].competitors],
                  feedback: [this.demoDt[0].feedback],
                });
              });
          });
      }
    });
  }



  getDemo() {
    this.route.queryParams.subscribe(paramsId => {
      this.demo = paramsId.demoid;
      if (this.demo)
        this.update = true;
    });
  }

  initilizeProductDemos() {
    this.productDemosForm = this.formBuilder.group({
      customerId: ['', Validators.required],
      customerName: [''],
      project: [''],
      SCRMNumber: [''],
      expectedPOValue: [''],
      CPEType: [''],
      CPENumber: [''],
      expectedCPEPrice: [''],
      CPEYearlyGrowth: [''],
      expectedPOCDate: [''],
      expectedDeploymentDate: [''],
      VANServiceFlag: ['Yes'],
      CEIntegrationFlag: ['Yes'],
      DCFlag: ['Yes'],
      underlaylink: ['Yes'],
      interestedProduct: ['Yes'],
      demoedProduct: [''],
      demoDate: [''],
      webExUrl: [''],
      noOfSites: [''],
      demoSalesEngineer: [''],
      IPCCResource: [''],
      accountManager: [''],
      competitor: [''],
      feedback: ['']
    });
  }


  defaultCustomerDetails(cust) {
    var newArray = this.customerInfo.filter(function (item) {
      return item.customerid == cust;
    });
    console.log(newArray[0]);
    this.productDemosForm.value.customerName = newArray[0].customername;
  }

  defaultProjectDetails(proj) {
    var newArray123 = this.projects.filter(function (item) {
      return item.projectid == proj;
    });
    console.log(newArray123[0]);
    this.productDemosForm.value.customerName = newArray123[0].customername;
    this.productDemosForm.value.customerId = newArray123[0].customerid;

    this.productDemosForm.patchValue({
      customerName: [newArray123[0].customername],
      customerId: [newArray123[0].customerid]
    });
  }



  //Get All Customer Details
  getQualifiedOpprtunity() {
    this.trailstudio
      .getCustomer()
      .subscribe((data) => {
        this.customerInfo = data;
      });
  }


  getAllCustomerDetails() {
    this.trailstudio
      .getCustomerDetails()
      .subscribe((data) => {
        this.getQualifiedOpprtunity();
      });
  }

  //Get All Project(Qualified Opportunities)
  //Get All Customer Details
  getAllProjects() {
    this.trailstudio
      .getQualifiedOpportunities()
      .subscribe((data) => {
        console.log(data);
        this.projects = data;
        console.log("I am called again for projects..", this.projects);
      });
  }


  findQualifiedOpportunity() {
    this.trailstudio
      .getAllQualifiedOpportunities()
      .subscribe((data) => {
        this.getQualifiedOpprtunity();
      });
  }



  saveProductDemo() {
    console.log(this.productDemosForm.value);
    console.log(this.update);
     if (this.update) {
       this.toastrService.success('Product Demos updated succcessfully.', 'Thank You :)');
       this.productDemosForm.value.demoid = this.demo;
        //update code
        this.trailstudio
        .updateProductDemo(this.productDemosForm.value)
        .subscribe((data) => {
          console.log("Saved Successfully...", data);
        });
     } else {
       this.toastrService.success('Product Demos submitted succcessfully.', 'Thank You :)');
       this.trailstudio
         .insertProductDemos(this.productDemosForm.value)
         .subscribe((data) => {
           console.log("Saved Successfully...", data);
         });
       this.initilizeProductDemos();
     }
  }

  /* public file:any;
   fileData: File = null;
   
     fileChange(input){
         const reader = new FileReader();
         if (input.files.length) {       
             this.file = input.files[0].name;  
             this.fileData = <File>input.files[0];          
         }
         console.log(this.fileData);
     }
 
     removeFile():void{
         this.file = '';
     }
   */



}
