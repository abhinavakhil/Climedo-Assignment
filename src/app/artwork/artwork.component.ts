import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { MuseumService } from 'src/shared/museum.service';
import { ArtworkCommonDialogComponent } from '../artwork-common-dialog/artwork-common-dialog.component';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent implements OnInit {
  objectIds: Array<any> = [];
  departments: Array<any> = [];
  artWorkList: Array<any> = [];
  responsiveOptions: any = {};
  imageItems: Array<any> = [];

  constructor(
    private museumService: MuseumService,
    private modalService: NgbModal
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 6,
        numScroll: 0,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.getObjects();
    this.getDepartments();
    this.getImages();
  }

  /**
   * Get objects with Ids
   */

  getObjects() {
    this.museumService.getObjects().subscribe((response) => {
      this.objectIds = [...response.objectIDs];
      this.getObjectData(response.objectIDs.slice(0, 20));
    });
  }

  /**
   * Get departments
   */

  getDepartments() {
    this.museumService.getDepartments().subscribe((response) => {
      this.departments = [...response];
      // this.getDepartmentsId(this.departments);
    });
  }

  /**
   * Get departments based upon Id
   */

  getDepartmentsId(departments: any[]) {
    let ids = departments.map((item) => {
      return item.departmentId;
    });
    console.log(ids);

    forkJoin(
      ids.map((id) =>
        this.museumService.getObjectDataById(id).pipe(
          map((response) => {
            console.log(response);
            return response;
          })
        )
      )
    ).subscribe((data: any) => {
      this.artWorkList = [].concat(...data);
      console.log(this.artWorkList);
    });
  }

  /**
   * Get Object based upon id
   */

  async getObjectData(objectIds: any[]) {
    forkJoin(
      await objectIds.map((id) =>
        this.museumService.getObjectsData(id).pipe(
          map((response) => {
            console.log(response);
            return response;
          })
        )
      )
    ).subscribe((data: any) => {
      this.artWorkList = [].concat(...data);
      console.log(this.artWorkList);
    });
  }

  /**
   * Get images
   */

  getImages() {
    this.imageItems = [
      {
        img: 'https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_960_720.jpg',
        title: 'Allamah',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_960_720.jpg',
        title: 'Napier Museum Trivandrum',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_960_720.jpg',
        title: 'National Rail Museum',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_960_720.jpg',
        title: 'Allamah',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_960_720.jpg',
        title: 'Allamah',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/04/05/01/10/museum-2203648_960_720.jpg',
        title: 'Allamah',
      },
    ];
  }

  /**
   * Open Dialog
   * @param img imageof dialog
   * @param title title of dialog
   */

  open(img: any, title: any) {
    const modalRef = this.modalService.open(ArtworkCommonDialogComponent, {
      scrollable: true,
    });

    let data = {
      title: title,
      image: img,
    };

    modalRef.componentInstance.data = data;
  }
}
