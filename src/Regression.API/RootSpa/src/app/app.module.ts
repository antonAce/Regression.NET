import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ModelTooltipComponent } from './model-tooltip/model-tooltip.component';
import { StatisticsTableComponent } from './statistics-table/statistics-table.component';
import { StatisticsCellComponent } from './statistics-table/statistics-cell/statistics-cell.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { ToolsNavigatorComponent } from './tools-navigator/tools-navigator.component';

import { DatasetAnalysisService } from '@services/dataset-analysis.service';
import { DatasetStorageService } from '@services/dataset-storage.service';
import { TooltipMediatorService } from '@services/tooltip-mediator.service';
import { FileUploadService } from '@services/file-upload.service';

import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { ModelNotFoundPageComponent } from './model-not-found-page/model-not-found-page.component';
import { PlotPageComponent } from './plot-page/plot-page.component';
import { PlotElementComponent } from './plot-page/plot-element/plot-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    ModelTooltipComponent,
    StatisticsTableComponent,
    StatisticsCellComponent,
    StatisticsPageComponent,
    ToolsNavigatorComponent,
    AnalyticsPageComponent,
    ModelNotFoundPageComponent,
    PlotPageComponent,
    PlotElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    KatexModule
  ],
  providers: [
    DatasetAnalysisService,
    DatasetStorageService,
    TooltipMediatorService,
    FileUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }