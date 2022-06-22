import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css']
})
export class MemberTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'mobile', 'email', 'action'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  id: number;
  mobile: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{id: 1, name: 'Peter Andersson', mobile: '0703871256', email: 'peter.andersson@denstore.com'},
{id: 2, name: 'Stina Stigberg', mobile: '0708723541', email: 'stina.stigberg@hotmail.com'},
{id: 3, name: 'Stefan Pettersson', mobile: '0707329417', email: 'stefan.pettersson@storel.com'},
{id: 4, name: 'Sofia Larsson', mobile: '0702951864', email: 'sofia.larsson@volvo.com'},
{id: 5, name: 'Olle Pedersen', mobile: '0708261593', email: 'olle.pedersen@citygross.com'},
];
