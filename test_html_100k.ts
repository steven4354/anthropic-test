import axios from 'axios';
import heredoc from 'tsheredoc';
import dotenv from 'dotenv';

// dotenv
dotenv.config();

const API_KEY = process.env.ANTHROPIC_API_KEY;
const BASE_URL = 'https://api.anthropic.com/v1/complete';

const prompt1 = heredoc(`
You are an expert programmer like Linus Torvalds.

You are given a HTML: and a TASK:

Do what the TASK says with the HTML
`);

/*
TASK: Make me a jquery that will extract all their role, company, and description in this format

[{ role: -, company: -, date: -, description: -}, ...]

[{ role: -, company: -, date: -, description: -}, ...]
*/
const prompt2 = heredoc`

You are an expert programmer like Linus Torvalds. Complete the (TASK)

TASK: Make me a js client script that will extract the experience text and format it into an array like so

[
  {
    currentCompany: "",
    currentRole: "",
    currentDateRange: "",
    allExperiences: [{ role: "somerole", company: "somecompany", dateRange: "somedate"}, ...]
  },
  ...
]

HTML:
<ol id="ember4526" class="ember-view profile-list" data-test-paginated-list="" data-live-test-paginated-list="">
      
        <li id="ember4527" class="ember-view profile-list__border-bottom">
      
<!---->          <div id="ember4554" class="ember-view" data-test-paginated-list-item="" data-live-test-paginated-list-item="">
      
          <article class="profile-list-item hp-core-temp " data-test-profile-list-view-list-row="">
              <span class="profile-list-item__selector">
  <input id="select-item-ember4555" class="small-input" type="checkbox">
  <label for="select-item-ember4555">
    <span class="a11y-text">
      Select Jody Pope
    </span>
  </label>
</span>

              
    
  
                    <!---->
                    <!---->
                  
  
                    <!---->
                    <!---->
                  


    
  <div class="standard-profile-row">
  
<div>
  <article class="row--vertical row" data-test-row="">
    <div class="row__top-section">
      <div class="row__card">
        <div class="row__top-card">
            
<section class="lockup">
  <div id="ember4559" class="artdeco-entity-lockup artdeco-entity-lockup--size-5 ember-view">
    <div id="ember4560" class="artdeco-entity-lockup__image artdeco-entity-lockup__image--type-circle ember-view lockup__image--profile-size-5" type="circle">
      <span class="lockup__image-container" data-test-row-lockup-figure="" data-walkme-id="otw_lockup_image">
          <img title="Jody Pope" src="https://media.licdn.com/dms/image/D5603AQGbMe3NdS2QDA/profile-displayphoto-shrink_100_100/0/1689783886590?e=1697673600&amp;v=beta&amp;t=1twAl6kl5zQLPszmJ038nj26nftbOdJUtAJVax-HQek" loading="lazy" alt="Jody Pope" id="ember4561" class="evi-image lazy-image ember-view lockup__image" aria-label="Jody Pope is open to work" data-test-lockup-image="">
<!---->      </span>
    
</div>
    <div id="ember4562" class="artdeco-entity-lockup__content lockup__content ember-view">
      <span class="lockup__content-title">
        <span data-test-row-lockup-full-name="" data-live-test-row-lockup-full-name="">
          <div id="ember4563" class="artdeco-entity-lockup__title ember-view">
                    <a href="https://www.linkedin.com/talent/profile/AEMAAADi_jsBaFBDp0bq1Fv2f330Fk6fjmzIpYg?highlightedPatternSource=%255Cbmedicare%2520advantage&amp;trk=SEARCH_GLOBAL" target="_blank" rel="noopener noreferrer" data-test-link-to-profile-link="true" data-live-test-link-to-profile-link="true">
      
                  Jody Pope
                
    </a>

          
</div>
        </span>
          <span data-test-lockup-degree="">
            <div id="ember4564" class="artdeco-entity-lockup__badge ember-view">    <span class="a11y-text">Third degree connection</span>
  <span class="artdeco-entity-lockup__degree" aria-hidden="true">
    ·&nbsp;3rd
  </span>
<!----><!----></div>
          </span>
        <!---->        
                
    
<div class="lockup-badges">
  <div id="ember4565" class="artdeco-entity-lockup artdeco-entity-lockup--size-7 ember-view">
<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->  
</div>
</div>
    <!---->
    <!---->
  
              <!---->
            
      </span>
        <div id="ember4566" class="artdeco-entity-lockup__subtitle ember-view">
          <span data-test-row-lockup-headline="" data-live-test-row-lockup-headline="">
            Business development and marketing leader
          </span>
        </div>
      <div class="lockup__details">
<!---->        <div id="ember4567" class="artdeco-entity-lockup__metadata ember-view">
            <div data-test-row-lockup-location="" data-live-test-row-lockup-location="">
               Dallas-Fort Worth Metroplex
            </div>
            <span data-test-current-employer-industry="" data-live-test-current-employer-industry="">
              · Insurance
            </span>
<!---->          
<!---->              <span class="row-lockup-details" data-test-row-lockup-details-wrapper="">
  
                
    <!---->
    <!---->
    <!---->
  
              
</span>
            
        </div>
      </div>
    </div>
  
</div>
</section>
        </div>

          
<div data-test-history="" class="history">
  
            
<div data-test-history-group="" class="history-group">
    <div data-test-description-entry-term="" class="history-group__term t-14 t-black t-bold">
      <span data-test-history-group-definition="" class="history-group__definition" aria-hidden="true">
        Experience
      </span>
      <span class="a11y-text">
        Profile experience
      </span>
    </div>

<!---->
  <div>
    
<!---->            
      <ol id="ember4569" class="ember-view expandable-list history-group__list-items" data-test-expandable-list="">
    
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Director, Marketing <em class="sh">Medicare Advantage</em> at DentaQuest/ Sun Life</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2021</time> – Present
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Director of Marketing Strategy at GuideWell Connect</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2019</time> – <time>2020</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>DTC Aquisition Lead at Cigna</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2018</time> – <time>2019</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Marketing Director:  Individual Retention at Anthem</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2013</time> – <time>2018</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Marketing Director:  Individual West Region at Anthem</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2011</time> – <time>2014</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Regional Marketing Consultant at Humana</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2005</time> – <time>2010</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Consumer Marketing Manager at Kaiser Permanente</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>1999</time> – <time>2001</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Consumer Sales Manager at CIGNA</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>1998</time> – <time>1999</time>
      </span>

<!----></li>
    
      <button data-test-expandable-list-button="" class="expandable-list__button expandable-list__button--inverse" aria-expanded="true" type="button">
        <span aria-hidden="true">Show less</span>
        <span class="a11y-text">Show less items in this list</span>
          <li-icon aria-hidden="true" type="chevron-up-icon" class="expandable-list__button-default-chevron" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8 7l-5.9 4L1 9.5l6.2-4.2c.5-.3 1.2-.3 1.7 0L15 9.5 13.9 11 8 7z"></path>
    </svg></li-icon>
      </button>
  </ol>

  </div>
</div>
            
<div data-test-history-group="" class="history-group">
    <div data-test-description-entry-term="" class="history-group__term t-14 t-black t-bold">
      <span data-test-history-group-definition="" class="history-group__definition" aria-hidden="true">
        Education
      </span>
      <span class="a11y-text">
        Profile education
      </span>
    </div>

<!---->
  <div>
    
      <ol id="ember4570" class="ember-view expandable-list history-group__list-items" data-test-expandable-list="">
    
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>University of Missouri - KC, Bachelor of Business Administration - BBA</span>

<!---->
<!----></li>
    
<!---->  </ol>

  </div>
</div>
            
            
          
</div>

<!---->        
    <!---->
    <!---->
      
    
        
          <div>
                
                    <!---->
                    
<!---->                      <!---->

                


                    <!---->
                    
<!---->                      
<dl class="decorations" data-test-decorations="">
    <div class="decorations__row" data-test-row-decorations__skills-match-insights="">
      <dt class="decorations__row-title" data-test-row-decorations__skills-match-insights-title="">
        <dfn aria-hidden="true">Skills Match</dfn>
        <label class="a11y-text">Profile skills match row decorations</label>
      </dt>

<!---->
        <div class="decorations__skills-match-insights-list" data-test-row-decorations__skills-match-insights-list="">

              
<!---->        
      <!---->
      
<dd id="ember4974" class="base-decoration" data-test-decoration-item="">
  <div class="hoverable">
  
<!---->      <button aria-label="Medicare Advantage" tabindex="-1" id="ember4975" class="artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view base-decoration__trigger t-14 base-decoration__trigger--skillsV2" data-live-test-decoration-type="skillsV2" data-test-decoration-title=""><!---->
<span class="artdeco-button__text">
    Medicare Advantage
</span></button>
    <div id="ember4976" data-test-hoverable-content="" class="hoverable-content  hoverable-content--placement-bottom">
<!----></div>

    <span tabindex="-1" id="ember4977" class="hidden-row-decoration-trigger artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">

      <div class="hidden-row-decoration-trigger__outlet">
        <button role="button" aria-label="Medicare Advantage" aria-expanded="false" aria-controls="artdeco-hoverable-artdeco-gen-65" id="ember4978" class="hidden-row-decoration-trigger__btn artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view" type="button">  <li-icon aria-hidden="true" type="caret-filled-down-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
      </div>

      <div id="artdeco-gen-65" class="ember-view"><div id="ember4980" class="ember-view"></div></div>

    </span>

    <div id="content-hoverable-outlet-ember4974">  <div id="artdeco-hoverable-artdeco-gen-65" class="artdeco-hoverable-content hidden-row-decoration-trigger__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M13 4.32L9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
<!---->      
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>

  
</div>
</dd>
      
      
      
        
        
      
      
      
      
      
      
      
        <!---->
        <!---->
        <!---->
          <!---->
        
      
      
      <!---->
<!----><!---->  

<!---->        </div>
<!---->    </div>

    <div class="decorations__row" data-test-row-decorations="">
      <dt class="decorations__row-title">
        <dfn aria-hidden="true">Spotlights</dfn>
        <label class="a11y-text">Profile spotlights row decorations</label>
      </dt>
        
<!---->        
      <!---->
      <!---->
      
      
      
        
<dd id="ember4981" class="base-decoration" data-test-decoration-item="">
  <div class="hoverable">
  
      <div></div>
      <button aria-label="Open to work" tabindex="-1" id="ember4982" class="artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view base-decoration__trigger t-14 base-decoration__trigger--openToOpportunities" data-live-test-decoration-type="openToOpportunities" data-test-decoration-title="">  <li-icon aria-hidden="true" type="radar-dish-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M3.3 6l6.7 6.7a5.1 5.1 0 01-2 .42A5.5 5.5 0 017 13a5.14 5.14 0 01-4-4 5.21 5.21 0 01.3-3m-.2-2.48a1 1 0 00-.78.39 7 7 0 004.32 11A7.35 7.35 0 008 15a7 7 0 004.08-1.31 1 1 0 00.1-1.5L3.82 3.82a1 1 0 00-.72-.3zM8 1v1.88A5.13 5.13 0 0113.13 8H15a7 7 0 00-7-7zm0 3v1.88A2.13 2.13 0 0110.13 8H12a4 4 0 00-4-4z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Open to work
</span></button>
    <div id="ember4983" data-test-hoverable-content="" class="hoverable-content  hoverable-content--placement-bottom">
<!----></div>

    <span tabindex="-1" id="ember4984" class="hidden-row-decoration-trigger artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">

      <div class="hidden-row-decoration-trigger__outlet">
        <button role="button" aria-label="Enter for more details on Open to work" aria-expanded="false" aria-controls="artdeco-hoverable-artdeco-gen-66" id="ember4985" class="hidden-row-decoration-trigger__btn artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view" type="button">  <li-icon aria-hidden="true" type="caret-filled-down-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
      </div>

      <div id="artdeco-gen-66" class="ember-view"><div id="ember4987" class="ember-view"></div></div>

    </span>

    <div id="content-hoverable-outlet-ember4981">  <div id="artdeco-hoverable-artdeco-gen-66" class="artdeco-hoverable-content hidden-row-decoration-trigger__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M13 4.32L9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
<!---->      
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>

  
</div>
</dd>
        
      
      
      
      
      
      
      
        <!---->
        <!---->
        <!---->
          <!---->
        
      
      
      <!---->
<!----><!---->  
    </div>

<!---->
<!---->
<!----></dl>

                

<!---->
                      </div>
        

    
  

  
      </div>
      <div class="row__aside">
        
    <!---->
    <aside class="row-aside row-aside--align-left" data-test-row-aside-wrapper="">
  
        
            <span data-test-profile-item-actions="">
              
  
  

    
        
        
          
  
            
              
  
                
                  
                    
                      
                        
  
                          
  
                            
                              

                                
<div>
  
                                  
                                    
                                      

                                        
                                          
                                            
                                              

                                                
                                                    
                                                    
  <div>
  
<ul class="shared-action-buttons">
  
    

      <div class="profile-item-actions" data-test-profile-item-actions="">
        <div class="profile-item-actions__act">
<!----><!---->
<!---->
            
  <button id="ember5006" class="artdeco-button artdeco-button--2 artdeco-button--pro artdeco-button--secondary ember-view profile-item-actions__item" data-live-test-action="save-to-project" data-test-action="save-to-project"><!---->
<span class="artdeco-button__text">
    
      <span aria-hidden="true">Save to project</span>
      <span class="a11y-text">Save Jody to a project</span>
  
</span></button>

<!---->
<!----><!---->
<!---->        </div>
        <div class="profile-item-actions__update">
          

<span tabindex="-1" id="ember5008" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view" data-test-send-message-hover-trigger="">
    <button aria-describedby="artdeco-hoverable-artdeco-gen-67" id="ember5009" class="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view profile-item-actions__item" data-test-component="message-icon-btn" data-live-test-component="message-icon-btn" type="button">  <li-icon aria-hidden="true" type="envelope-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
      <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 2v2l-8 5.24L4 8V6h16zM4 18V9l7.32 4.78a1.25 1.25 0 001.37 0L20 9v9H4z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Message Jody
</span></button>
  <div id="artdeco-gen-67" class="ember-view"><div id="ember5011" class="ember-view"></div></div>
</span>
          <div>
            
<div id="ember5013" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view more-actions" data-test-more-actions="">
  <button aria-expanded="false" id="0-more-actions-trigger" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--2 artdeco-button--muted artdeco-button--circle artdeco-button--tertiary more-actions__trigger" data-test-more-actions-trigger="" type="button" tabindex="0">
    <span class="a11y-text">More actions</span>
    <li-icon aria-hidden="true" type="ellipsis-horizontal-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
      <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z"></path>
    </svg></li-icon>
  
<!----></button>
  <div tabindex="-1" aria-hidden="true" id="ember5015" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view more-actions__dropdown-content" data-test-more-actions-content=""><!----></div>
</div>
          </div>
        </div>
      </div>
      <div id="profile-item-actions-inline-notification-ember5003" class="profile-item-actions__notification-area"></div>
    
  
</ul>
</div>


  <!---->
    <!---->
    <!---->
  <!---->
    <!---->

  <!---->

  <!---->

    <!---->
    <!---->

                                                  

                                                
                                              
                                            
                                          
                                        
                                      
                                    
                                  
                                
</div>
                              
                            
                          

                        

                      
                    
                  
                
              

            
          

        
      

    
  


            </span>
            
<!---->
        

    

<!---->
<!----></aside>
    <!---->
  
      </div>
    </div>

    
    <!---->
    <!---->
    <!---->
  
  </article>
</div>
</div>


    
  
                    <!---->
                    <!---->
                  
  
                    <!---->
                    <!---->
                  

  
          </article>
        
  </div>

      
  </li>

<!---->    
      
        <li id="ember4528" class="ember-view profile-list__border-bottom">
      
<!---->          <div id="ember4572" class="ember-view" data-test-paginated-list-item="" data-live-test-paginated-list-item="">
      
          <article class="profile-list-item hp-core-temp " data-test-profile-list-view-list-row="">
              <span class="profile-list-item__selector">
  <input id="select-item-ember4573" class="small-input" type="checkbox">
  <label for="select-item-ember4573">
    <span class="a11y-text">
      Select Paul E. Maxwell
    </span>
  </label>
</span>

              
    
  
                    <!---->
                    <!---->
                  
  
                    <!---->
                    <!---->
                  


    
  <div class="standard-profile-row">
  
<div>
  <article class="row--vertical row" data-test-row="">
    <div class="row__top-section">
      <div class="row__card">
        <div class="row__top-card">
            
<section class="lockup">
  <div id="ember4577" class="artdeco-entity-lockup artdeco-entity-lockup--size-5 ember-view">
    <div id="ember4578" class="artdeco-entity-lockup__image artdeco-entity-lockup__image--type-circle ember-view lockup__image--profile-size-5" type="circle">
      <span class="lockup__image-container" data-test-row-lockup-figure="">
          <img title="Paul E. Maxwell" src="https://media.licdn.com/dms/image/D4E35AQFrwuutGl9EZg/profile-framedphoto-shrink_100_100/0/1685023872416?e=1692644400&amp;v=beta&amp;t=SauJHrYSEy_oWbwTPDC9QmcMc55kb4HEO6hlC_L8bT8" loading="lazy" alt="Paul E. Maxwell" id="ember4579" class="evi-image lazy-image ember-view lockup__image" aria-label="Paul E. Maxwell is open to work" data-test-lockup-image="">
<!---->      </span>
    
</div>
    <div id="ember4580" class="artdeco-entity-lockup__content lockup__content ember-view">
      <span class="lockup__content-title">
        <span data-test-row-lockup-full-name="" data-live-test-row-lockup-full-name="">
          <div id="ember4581" class="artdeco-entity-lockup__title ember-view">
                    <a href="https://www.linkedin.com/talent/profile/AEMAAALI-KYBS5-L-cSTsnr6apMLFZzERFO5V_0?highlightedPatternSource=%255Cbmedicare%2520advantage&amp;trk=SEARCH_GLOBAL" target="_blank" rel="noopener noreferrer" data-test-link-to-profile-link="true" data-live-test-link-to-profile-link="true">
      
                  Paul E. Maxwell
                
    </a>

          
</div>
        </span>
          <span data-test-lockup-degree="">
            <div id="ember4582" class="artdeco-entity-lockup__badge ember-view">    <span class="a11y-text">Third degree connection</span>
  <span class="artdeco-entity-lockup__degree" aria-hidden="true">
    ·&nbsp;3rd
  </span>
<!----><!----></div>
          </span>
        <!---->        
                
    
<div class="lockup-badges">
  <div id="ember4583" class="artdeco-entity-lockup artdeco-entity-lockup--size-7 ember-view">
<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->  
</div>
</div>
    <!---->
    <!---->
  
              <!---->
            
      </span>
        <div id="ember4584" class="artdeco-entity-lockup__subtitle ember-view">
          <span data-test-row-lockup-headline="" data-live-test-row-lockup-headline="">
            Director | Sales and Operations | BPO | Vendor Management | Business Development
          </span>
        </div>
      <div class="lockup__details">
<!---->        <div id="ember4585" class="artdeco-entity-lockup__metadata ember-view">
            <div data-test-row-lockup-location="" data-live-test-row-lockup-location="">
               New Port Richey, Florida, United States
            </div>
            <span data-test-current-employer-industry="" data-live-test-current-employer-industry="">
              · Insurance
            </span>
<!---->          
<!---->              <span class="row-lockup-details" data-test-row-lockup-details-wrapper="">
  
                
    <!---->
    <!---->
    <!---->
  
              
</span>
            
        </div>
      </div>
    </div>
  
</div>
</section>
        </div>

          
<div data-test-history="" class="history">
  
            
<div data-test-history-group="" class="history-group">
    <div data-test-description-entry-term="" class="history-group__term t-14 t-black t-bold">
      <span data-test-history-group-definition="" class="history-group__definition" aria-hidden="true">
        Experience
      </span>
      <span class="a11y-text">
        Profile experience
      </span>
    </div>

<!---->
  <div>
    
<!---->            
      <ol id="ember4587" class="ember-view expandable-list history-group__list-items" data-test-expandable-list="">
    
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Director - Direct to Consumer Sales and Operations at Centene Corporation at Centene Corporation</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2021</time> – <time>2023</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Senior Manager  - Direct to Consumer - <em class="sh">Medicare Advantage</em> &amp; Standalone Prescription Drug Plan Growth at Centene Corporation</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2019</time> – <time>2021</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Director Medicare Telesales at Anthem Corporation</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2012</time> – <time>2019</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Marketing Operations Program Senior Manager (2009-2012) Telesales Program Manager (2007-2009) at WellCare</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2006</time> – <time>2012</time>
      </span>

<!----></li>
    
      <button data-test-expandable-list-button="" class="expandable-list__button expandable-list__button--inverse" aria-expanded="true" type="button">
        <span aria-hidden="true">Show less</span>
        <span class="a11y-text">Show less items in this list</span>
          <li-icon aria-hidden="true" type="chevron-up-icon" class="expandable-list__button-default-chevron" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8 7l-5.9 4L1 9.5l6.2-4.2c.5-.3 1.2-.3 1.7 0L15 9.5 13.9 11 8 7z"></path>
    </svg></li-icon>
      </button>
  </ol>

  </div>
</div>
            
<div data-test-history-group="" class="history-group">
    <div data-test-description-entry-term="" class="history-group__term t-14 t-black t-bold">
      <span data-test-history-group-definition="" class="history-group__definition" aria-hidden="true">
        Education
      </span>
      <span class="a11y-text">
        Profile education
      </span>
    </div>

<!---->
  <div>
    
      <ol id="ember4588" class="ember-view expandable-list history-group__list-items" data-test-expandable-list="">
    
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>University of Phoenix, Bachelor's Science in Management</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2020</time> – <time>2021</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>SUNY Adirondack, Associates Business Administration</span>

<!---->
<!----></li>
    
<!---->  </ol>

  </div>
</div>
            
            
          
</div>

<!---->        
    <!---->
    <!---->
      
    
        
          <div>
                
                    <!---->
                    
<!---->                      <!---->

                


                    <!---->
                    
<!---->                      
<dl class="decorations" data-test-decorations="">
    <div class="decorations__row" data-test-row-decorations__skills-match-insights="">
      <dt class="decorations__row-title" data-test-row-decorations__skills-match-insights-title="">
        <dfn aria-hidden="true">Skills Match</dfn>
        <label class="a11y-text">Profile skills match row decorations</label>
      </dt>

<!---->
        <div class="decorations__skills-match-insights-list" data-test-row-decorations__skills-match-insights-list="">

              
<!---->        
      <!---->
      
<dd id="ember5020" class="base-decoration" data-test-decoration-item="">
  <div class="hoverable">
  
<!---->      <button aria-label="Medicare Advantage" tabindex="-1" id="ember5021" class="artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view base-decoration__trigger t-14 base-decoration__trigger--skillsV2" data-live-test-decoration-type="skillsV2" data-test-decoration-title=""><!---->
<span class="artdeco-button__text">
    Medicare Advantage
</span></button>
    <div id="ember5022" data-test-hoverable-content="" class="hoverable-content  hoverable-content--placement-bottom">
<!----></div>

    <span tabindex="-1" id="ember5023" class="hidden-row-decoration-trigger artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">

      <div class="hidden-row-decoration-trigger__outlet">
        <button role="button" aria-label="Medicare Advantage" aria-expanded="false" aria-controls="artdeco-hoverable-artdeco-gen-68" id="ember5024" class="hidden-row-decoration-trigger__btn artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view" type="button">  <li-icon aria-hidden="true" type="caret-filled-down-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
      </div>

      <div id="artdeco-gen-68" class="ember-view"><div id="ember5026" class="ember-view"></div></div>

    </span>

    <div id="content-hoverable-outlet-ember5020">  <div id="artdeco-hoverable-artdeco-gen-68" class="artdeco-hoverable-content hidden-row-decoration-trigger__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M13 4.32L9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
<!---->      
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>

  
</div>
</dd>
      
      
      
        
        
      
      
      
      
      
      
      
        <!---->
        <!---->
        <!---->
          <!---->
        
      
      
      <!---->
<!----><!---->  

<!---->        </div>
<!---->    </div>

    <div class="decorations__row" data-test-row-decorations="">
      <dt class="decorations__row-title">
        <dfn aria-hidden="true">Spotlights</dfn>
        <label class="a11y-text">Profile spotlights row decorations</label>
      </dt>
        
<!---->        
      <!---->
      <!---->
      
      
      
        
<dd id="ember5027" class="base-decoration" data-test-decoration-item="">
  <div class="hoverable">
  
      <div></div>
      <button aria-label="Open to work" tabindex="-1" id="ember5028" class="artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view base-decoration__trigger t-14 base-decoration__trigger--openToOpportunities" data-live-test-decoration-type="openToOpportunities" data-test-decoration-title="">  <li-icon aria-hidden="true" type="radar-dish-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M3.3 6l6.7 6.7a5.1 5.1 0 01-2 .42A5.5 5.5 0 017 13a5.14 5.14 0 01-4-4 5.21 5.21 0 01.3-3m-.2-2.48a1 1 0 00-.78.39 7 7 0 004.32 11A7.35 7.35 0 008 15a7 7 0 004.08-1.31 1 1 0 00.1-1.5L3.82 3.82a1 1 0 00-.72-.3zM8 1v1.88A5.13 5.13 0 0113.13 8H15a7 7 0 00-7-7zm0 3v1.88A2.13 2.13 0 0110.13 8H12a4 4 0 00-4-4z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Open to work
</span></button>
    <div id="ember5029" data-test-hoverable-content="" class="hoverable-content  hoverable-content--placement-bottom">
<!----></div>

    <span tabindex="-1" id="ember5030" class="hidden-row-decoration-trigger artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">

      <div class="hidden-row-decoration-trigger__outlet">
        <button role="button" aria-label="Enter for more details on Open to work" aria-expanded="false" aria-controls="artdeco-hoverable-artdeco-gen-69" id="ember5031" class="hidden-row-decoration-trigger__btn artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view" type="button">  <li-icon aria-hidden="true" type="caret-filled-down-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
      </div>

      <div id="artdeco-gen-69" class="ember-view"><div id="ember5033" class="ember-view"></div></div>

    </span>

    <div id="content-hoverable-outlet-ember5027">  <div id="artdeco-hoverable-artdeco-gen-69" class="artdeco-hoverable-content hidden-row-decoration-trigger__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M13 4.32L9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
<!---->      
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>

  
</div>
</dd>
        
      
      
      
      
      
      
      
        <!---->
        <!---->
        <!---->
          <!---->
        
      
      
      <!---->
<!----><!---->  
    </div>

<!---->
<!---->
<!----></dl>

                

<!---->
                      </div>
        

    
  

  
      </div>
      <div class="row__aside">
        
    <!---->
    <aside class="row-aside row-aside--align-left" data-test-row-aside-wrapper="">
  
        
            <span data-test-profile-item-actions="">
              
  
  

    
        
        
          
  
            
              
  
                
                  
                    
                      
                        
  
                          
  
                            
                              

                                
<div>
  
                                  
                                    
                                      

                                        
                                          
                                            
                                              

                                                
                                                    
                                                    
  <div>
  
<ul class="shared-action-buttons">
  
    

      <div class="profile-item-actions" data-test-profile-item-actions="">
        <div class="profile-item-actions__act">
<!----><!---->
<!---->
            
  <button id="ember5052" class="artdeco-button artdeco-button--2 artdeco-button--pro artdeco-button--secondary ember-view profile-item-actions__item" data-live-test-action="save-to-project" data-test-action="save-to-project"><!---->
<span class="artdeco-button__text">
    
      <span aria-hidden="true">Save to project</span>
      <span class="a11y-text">Save Paul E. to a project</span>
  
</span></button>

<!---->
<!----><!---->
<!---->        </div>
        <div class="profile-item-actions__update">
          

<span tabindex="-1" id="ember5054" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view" data-test-send-message-hover-trigger="">
    <button aria-describedby="artdeco-hoverable-artdeco-gen-70" id="ember5055" class="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view profile-item-actions__item" data-test-component="message-icon-btn" data-live-test-component="message-icon-btn" type="button">  <li-icon aria-hidden="true" type="envelope-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
      <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 2v2l-8 5.24L4 8V6h16zM4 18V9l7.32 4.78a1.25 1.25 0 001.37 0L20 9v9H4z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Message Paul E.
</span></button>
  <div id="artdeco-gen-70" class="ember-view"><div id="ember5057" class="ember-view"></div></div>
</span>
          <div>
            
<div id="ember5059" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view more-actions" data-test-more-actions="">
  <button aria-expanded="false" id="1-more-actions-trigger" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--2 artdeco-button--muted artdeco-button--circle artdeco-button--tertiary more-actions__trigger" data-test-more-actions-trigger="" type="button" tabindex="0">
    <span class="a11y-text">More actions</span>
    <li-icon aria-hidden="true" type="ellipsis-horizontal-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
      <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z"></path>
    </svg></li-icon>
  
<!----></button>
  <div tabindex="-1" aria-hidden="true" id="ember5061" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view more-actions__dropdown-content" data-test-more-actions-content=""><!----></div>
</div>
          </div>
        </div>
      </div>
      <div id="profile-item-actions-inline-notification-ember5049" class="profile-item-actions__notification-area"></div>
    
  
</ul>
</div>


  <!---->
    <!---->
    <!---->
  <!---->
    <!---->

  <!---->

  <!---->

    <!---->
    <!---->

                                                  

                                                
                                              
                                            
                                          
                                        
                                      
                                    
                                  
                                
</div>
                              
                            
                          

                        

                      
                    
                  
                
              

            
          

        
      

    
  


            </span>
            
<!---->
        

    

<!---->
<!----></aside>
    <!---->
  
      </div>
    </div>

    
    <!---->
    <!---->
    <!---->
  
  </article>
</div>
</div>


    
  
                    <!---->
                    <!---->
                  
  
                    <!---->
                    <!---->
                  

  
          </article>
        
  </div>

      
  </li>

<!---->    
      
        <li id="ember4529" class="ember-view profile-list__border-bottom">
      
<!---->          <div id="ember4590" class="ember-view" data-test-paginated-list-item="" data-live-test-paginated-list-item="">
      
          <article class="profile-list-item hp-core-temp " data-test-profile-list-view-list-row="">
              <span class="profile-list-item__selector">
  <input id="select-item-ember4591" class="small-input" type="checkbox">
  <label for="select-item-ember4591">
    <span class="a11y-text">
      Select Hannah Swenson, MBA
    </span>
  </label>
</span>

              
    
  
                    <!---->
                    <!---->
                  
  
                    <!---->
                    <!---->
                  


    
  <div class="standard-profile-row">
  
<div>
  <article class="row--vertical row" data-test-row="">
    <div class="row__top-section">
      <div class="row__card">
        <div class="row__top-card">
            
<section class="lockup">
  <div id="ember4595" class="artdeco-entity-lockup artdeco-entity-lockup--size-5 ember-view">
    <div id="ember4596" class="artdeco-entity-lockup__image artdeco-entity-lockup__image--type-circle ember-view lockup__image--profile-size-5" type="circle">
      <span class="lockup__image-container" data-test-row-lockup-figure="">
          <img title="Hannah Swenson, MBA" src="https://media.licdn.com/dms/image/D5635AQHgL6NCK5iQuA/profile-framedphoto-shrink_100_100/0/1691602900854?e=1692644400&amp;v=beta&amp;t=-5f4O0XyuzXaQDsjmz8OzXoZeWRvhxVnI1t1cnnPdMw" loading="lazy" alt="Hannah Swenson, MBA" id="ember4597" class="evi-image lazy-image ember-view lockup__image" aria-label="Hannah Swenson, MBA is open to work" data-test-lockup-image="">
<!---->      </span>
    
</div>
    <div id="ember4598" class="artdeco-entity-lockup__content lockup__content ember-view">
      <span class="lockup__content-title">
        <span data-test-row-lockup-full-name="" data-live-test-row-lockup-full-name="">
          <div id="ember4599" class="artdeco-entity-lockup__title ember-view">
                    <a href="https://www.linkedin.com/talent/profile/AEMAAApmh0IBxMv_WB7uhylSNFFEuoiXw2lhB54?highlightedPatternSource=%255Cbmedicare%2520advantage&amp;trk=SEARCH_GLOBAL" target="_blank" rel="noopener noreferrer" data-test-link-to-profile-link="true" data-live-test-link-to-profile-link="true">
      
                  Hannah Swenson, MBA
                
    </a>

          
</div>
        </span>
          <span data-test-lockup-degree="">
            <div id="ember4600" class="artdeco-entity-lockup__badge ember-view">    <span class="a11y-text">Second degree connection</span>
  <span class="artdeco-entity-lockup__degree" aria-hidden="true">
    ·&nbsp;2nd
  </span>
<!----><!----></div>
          </span>
        <!---->        
                
    
<div class="lockup-badges">
  <div id="ember4601" class="artdeco-entity-lockup artdeco-entity-lockup--size-7 ember-view">
<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->  
</div>
</div>
    <!---->
    <!---->
  
              <!---->
            
      </span>
        <div id="ember4602" class="artdeco-entity-lockup__subtitle ember-view">
          <span data-test-row-lockup-headline="" data-live-test-row-lockup-headline="">
            Experienced D2C Marketer
          </span>
        </div>
      <div class="lockup__details">
<!---->        <div id="ember4603" class="artdeco-entity-lockup__metadata ember-view">
            <div data-test-row-lockup-location="" data-live-test-row-lockup-location="">
               Houston, Texas, United States
            </div>
            <span data-test-current-employer-industry="" data-live-test-current-employer-industry="">
              · Hospitals and Health Care
            </span>
<!---->          
<!---->              <span class="row-lockup-details" data-test-row-lockup-details-wrapper="">
  
                
    <!---->
    <!---->
    <!---->
  
              
</span>
            
        </div>
      </div>
    </div>
  
</div>
</section>
        </div>

          
<div data-test-history="" class="history">
  
            
<div data-test-history-group="" class="history-group">
    <div data-test-description-entry-term="" class="history-group__term t-14 t-black t-bold">
      <span data-test-history-group-definition="" class="history-group__definition" aria-hidden="true">
        Experience
      </span>
      <span class="a11y-text">
        Profile experience
      </span>
    </div>

<!---->
  <div>
    
<!---->            
      <ol id="ember4605" class="ember-view expandable-list history-group__list-items" data-test-expandable-list="">
    
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Associate Director of Member Marketing at Scene Health</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2022</time> – <time>2023</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Communications and Engagement Consultant at EPIC Insurance Brokers &amp; Consultants</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2020</time> – <time>2022</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Regional Marketing Manager, Western Region <em class="sh">Medicare Advantage</em> at Cigna</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2015</time> – <time>2019</time>
      </span>

<!----></li>
    
      <button data-test-expandable-list-button="" class="expandable-list__button expandable-list__button--inverse" aria-expanded="false" type="button">
        <span aria-hidden="true">Show all (7)</span>
        <span class="a11y-text">Show all items in this list. Total items: 7</span>
          <li-icon aria-hidden="true" type="chevron-down-icon" class="expandable-list__button-default-chevron" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"></path>
    </svg></li-icon>
      </button>
  </ol>

  </div>
</div>
            
<div data-test-history-group="" class="history-group">
    <div data-test-description-entry-term="" class="history-group__term t-14 t-black t-bold">
      <span data-test-history-group-definition="" class="history-group__definition" aria-hidden="true">
        Education
      </span>
      <span class="a11y-text">
        Profile education
      </span>
    </div>

<!---->
  <div>
    
      <ol id="ember4606" class="ember-view expandable-list history-group__list-items" data-test-expandable-list="">
    
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>University of Houston, Master of Business Administration (MBA)</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2017</time> – <time>2018</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>Belmont University, Bachelor of Business Administration (B.B.A.)</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2008</time> – <time>2012</time>
      </span>

<!----></li>
        
<li data-test-description-description="" class="t-14 t-black t-normal">
<!---->
  <span>The University of Manchester</span>

      <span aria-hidden="true">·</span>
      <span class="description-entry__date-duration" data-test-description-entry-date-duration="">
        <time>2011</time>
      </span>

<!----></li>
    
      <button data-test-expandable-list-button="" class="expandable-list__button expandable-list__button--inverse" aria-expanded="false" type="button">
        <span aria-hidden="true">Show all (4)</span>
        <span class="a11y-text">Show all items in this list. Total items: 4</span>
          <li-icon aria-hidden="true" type="chevron-down-icon" class="expandable-list__button-default-chevron" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"></path>
    </svg></li-icon>
      </button>
  </ol>

  </div>
</div>
            
            
          
</div>

<!---->        
    <!---->
    <!---->
      
    
        
          <div>
                
                    <!---->
                    
<!---->                      <!---->

                


                    <!---->
                    
<!---->                      
<dl class="decorations" data-test-decorations="">
    <div class="decorations__row" data-test-row-decorations__skills-match-insights="">
      <dt class="decorations__row-title" data-test-row-decorations__skills-match-insights-title="">
        <dfn aria-hidden="true">Skills Match</dfn>
        <label class="a11y-text">Profile skills match row decorations</label>
      </dt>

<!---->
        <div class="decorations__skills-match-insights-list" data-test-row-decorations__skills-match-insights-list="">

              
<!---->        
      <!---->
      
<dd id="ember5066" class="base-decoration" data-test-decoration-item="">
  <div class="hoverable">
  
<!---->      <button aria-label="Medicare Advantage" tabindex="-1" id="ember5067" class="artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view base-decoration__trigger t-14 base-decoration__trigger--skillsV2" data-live-test-decoration-type="skillsV2" data-test-decoration-title=""><!---->
<span class="artdeco-button__text">
    Medicare Advantage
</span></button>
    <div id="ember5068" data-test-hoverable-content="" class="hoverable-content  hoverable-content--placement-bottom">
<!----></div>

    <span tabindex="-1" id="ember5069" class="hidden-row-decoration-trigger artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">

      <div class="hidden-row-decoration-trigger__outlet">
        <button role="button" aria-label="Medicare Advantage" aria-expanded="false" aria-controls="artdeco-hoverable-artdeco-gen-71" id="ember5070" class="hidden-row-decoration-trigger__btn artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view" type="button">  <li-icon aria-hidden="true" type="caret-filled-down-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
      </div>

      <div id="artdeco-gen-71" class="ember-view"><div id="ember5072" class="ember-view"></div></div>

    </span>

    <div id="content-hoverable-outlet-ember5066">  <div id="artdeco-hoverable-artdeco-gen-71" class="artdeco-hoverable-content hidden-row-decoration-trigger__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M13 4.32L9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
<!---->      
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>

  
</div>
</dd>
      
      
      
        
        
      
      
      
      
      
      
      
        <!---->
        <!---->
        <!---->
          <!---->
        
      
      
      <!---->
<!----><!---->  

<!---->        </div>
<!---->    </div>

    <div class="decorations__row" data-test-row-decorations="">
      <dt class="decorations__row-title">
        <dfn aria-hidden="true">Spotlights</dfn>
        <label class="a11y-text">Profile spotlights row decorations</label>
      </dt>
                    <!---->
                    
<!---->                      
<dl class="decorations" data-test-decorations="">
    <div class="decorations__row" data-test-row-decorations__skills-match-insights="">
      <dt class="decorations__row-title" data-test-row-decorations__skills-match-insights-title="">
        <dfn aria-hidden="true">Skills Match</dfn>
        <label class="a11y-text">Profile skills match row decorations</label>
      </dt>

<!---->
        <div class="decorations__skills-match-insights-list" data-test-row-decorations__skills-match-insights-list="">

              
<!---->        
      <!---->
      
<dd id="ember5131" class="base-decoration" data-test-decoration-item="">
  <div class="hoverable">
  
<!---->      <button aria-label="Medicare Advantage" tabindex="-1" id="ember5132" class="artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view base-decoration__trigger t-14 base-decoration__trigger--skillsV2" data-live-test-decoration-type="skillsV2" data-test-decoration-title=""><!---->
<span class="artdeco-button__text">
    Medicare Advantage
</span></button>
    <div id="ember5133" data-test-hoverable-content="" class="hoverable-content  hoverable-content--placement-bottom">
<!----></div>

    <span tabindex="-1" id="ember5134" class="hidden-row-decoration-trigger artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">

      <div class="hidden-row-decoration-trigger__outlet">
        <button role="button" aria-label="Medicare Advantage" aria-expanded="false" aria-controls="artdeco-hoverable-artdeco-gen-74" id="ember5135" class="hidden-row-decoration-trigger__btn artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view" type="button">  <li-icon aria-hidden="true" type="caret-filled-down-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
      </div>

      <div id="artdeco-gen-74" class="ember-view"><div id="ember5137" class="ember-view"></div></div>

    </span>

    <div id="content-hoverable-outlet-ember5131">  <div id="artdeco-hoverable-artdeco-gen-74" class="artdeco-hoverable-content hidden-row-decoration-trigger__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M13 4.32L9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
<!---->      
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>

  
</div>
</dd>
      
      
      
        
        
      
      
      
      
      
      
      
        <!---->
        <!---->
        <!---->
          <!---->
        
      
      
      <!---->
<!----><!---->  

<!---->        </div>
<!---->    </div>

    <div class="decorations__row" data-test-row-decorations="">
      <dt class="decorations__row-title">
        <dfn aria-hidden="true">Spotlights</dfn>
        <label class="a11y-text">Profile spotlights row decorations</label>
      </dt>
        
<!---->        
      <!---->
      <!---->
      
      
      
        
<dd id="ember5138" class="base-decoration" data-test-decoration-item="">
  <div class="hoverable">
  
      <div></div>
      <button aria-label="Open to work" tabindex="-1" id="ember5139" class="artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view base-decoration__trigger t-14 base-decoration__trigger--openToOpportunities" data-live-test-decoration-type="openToOpportunities" data-test-decoration-title="">  <li-icon aria-hidden="true" type="radar-dish-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M3.3 6l6.7 6.7a5.1 5.1 0 01-2 .42A5.5 5.5 0 017 13a5.14 5.14 0 01-4-4 5.21 5.21 0 01.3-3m-.2-2.48a1 1 0 00-.78.39 7 7 0 004.32 11A7.35 7.35 0 008 15a7 7 0 004.08-1.31 1 1 0 00.1-1.5L3.82 3.82a1 1 0 00-.72-.3zM8 1v1.88A5.13 5.13 0 0113.13 8H15a7 7 0 00-7-7zm0 3v1.88A2.13 2.13 0 0110.13 8H12a4 4 0 00-4-4z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Open to work
</span></button>
    <div id="ember5140" data-test-hoverable-content="" class="hoverable-content  hoverable-content--placement-bottom">
<!----></div>

    <span tabindex="-1" id="ember5141" class="hidden-row-decoration-trigger artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">

      <div class="hidden-row-decoration-trigger__outlet">
        <button role="button" aria-label="Enter for more details on Open to work" aria-expanded="false" aria-controls="artdeco-hoverable-artdeco-gen-75" id="ember5142" class="hidden-row-decoration-trigger__btn artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view" type="button">  <li-icon aria-hidden="true" type="caret-filled-down-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
      </div>

      <div id="artdeco-gen-75" class="ember-view"><div id="ember5144" class="ember-view"></div></div>

    </span>

    <div id="content-hoverable-outlet-ember5138">  <div id="artdeco-hoverable-artdeco-gen-75" class="artdeco-hoverable-content hidden-row-decoration-trigger__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M13 4.32L9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
<!---->      
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>

  
</div>
</dd>
        
      
      
      
      
      
      
<dd id="ember5145" class="base-decoration" data-test-decoration-item="">
  <div class="hoverable">
  
      <div></div>
      <button aria-label="2 connections" tabindex="-1" id="ember5146" class="artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view base-decoration__trigger t-14 base-decoration__trigger--connections" data-live-test-decoration-type="connections" data-test-decoration-title="">  <li-icon aria-hidden="true" type="in-common-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M11 3c-1.1 0-2.1.4-3 1-2.2-1.7-5.3-1.2-7 1s-1.2 5.3 1 7c.9.6 1.9 1 3 1s2.1-.4 3-1c2.2 1.7 5.3 1.2 7-1s1.2-5.3-1-7c-.9-.6-1.9-1-3-1zM1.9 8c0-1.7 1.4-3.1 3.1-3.1.6 0 1.2.2 1.7.5-1 1.6-1 3.6 0 5.2-1.4 1-3.4.6-4.3-.8-.3-.6-.5-1.2-.5-1.8zm9.1 3.1c-.6 0-1.2-.2-1.7-.5 1-1.6 1-3.6 0-5.2 1.4-1 3.4-.6 4.3.9s.6 3.4-.9 4.3c-.5.3-1.1.5-1.7.5z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    2 connections
</span></button>
    <div id="ember5147" data-test-hoverable-content="" class="hoverable-content  hoverable-content--placement-bottom">
<!----></div>

    <span tabindex="-1" id="ember5148" class="hidden-row-decoration-trigger artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-bottom ember-view">

      <div class="hidden-row-decoration-trigger__outlet">
        <button role="button" aria-label="Enter for more details on 2 connections" aria-expanded="false" aria-controls="artdeco-hoverable-artdeco-gen-76" id="ember5149" class="hidden-row-decoration-trigger__btn artdeco-button artdeco-button--1 artdeco-button--tertiary ember-view" type="button">  <li-icon aria-hidden="true" type="caret-filled-down-icon" class="artdeco-button__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    
</span></button>
      </div>

      <div id="artdeco-gen-76" class="ember-view"><div id="ember5151" class="ember-view"></div></div>

    </span>

    <div id="content-hoverable-outlet-ember5145">  <div id="artdeco-hoverable-artdeco-gen-76" class="artdeco-hoverable-content hidden-row-decoration-trigger__content artdeco-hoverable-content--inverse-theme artdeco-hoverable-content--open-spacing artdeco-hoverable-content--undefined-placement" tabindex="-1" role="tooltip" aria-hidden="true">
    <div class="artdeco-hoverable-content__shell">
        <button class="artdeco-hoverable-content__close-btn" aria-label="Dismiss" type="button">
          <li-icon aria-hidden="true" type="cancel-icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
      <path d="M13 4.32L9.31 8 13 11.69 11.69 13 8 9.31 4.31 13 3 11.69 6.69 8 3 4.31 4.31 3 8 6.69 11.68 3z"></path>
    </svg></li-icon>
        </button>
      <div class="artdeco-hoverable-content__content">
        
<!---->      
      </div>
    </div>
    <div class="artdeco-hoverable-content__arrow" aria-hidden="true"></div>
  </div>
</div>

  
</div>
</dd>
      
        <!---->
        <!---->
        <!---->
          <!---->
        
      
      
      <!---->
<!----><!---->  
    </div>

<!---->
<!---->
<!----></dl>

                

<!---->
                      </div>
        

    
  

  
      </div>
      <div class="row__aside">
        
    <!---->
    <aside class="row-aside row-aside--align-left" data-test-row-aside-wrapper="">
  
        
            <span data-test-profile-item-actions="">
              
  
  

    
        
        
          
  
            
              
  
                
                  
                    
                      
                        
  
                          
  
                            
                              

                                
<div>
  
                                  
                                    
                                      

                                        
                                          
                                            
                                              

                                                
                                                    
                                                    
  <div>
  
<ul class="shared-action-buttons">
  
    

      <div class="profile-item-actions" data-test-profile-item-actions="">
        <div class="profile-item-actions__act">
<!----><!---->
<!---->
            
  <button id="ember5170" class="artdeco-button artdeco-button--2 artdeco-button--pro artdeco-button--secondary ember-view profile-item-actions__item" data-live-test-action="save-to-project" data-test-action="save-to-project"><!---->
<span class="artdeco-button__text">
    
      <span aria-hidden="true">Save to project</span>
      <span class="a11y-text">Save Hazem to a project</span>
  
</span></button>

<!---->
<!----><!---->
<!---->        </div>
        <div class="profile-item-actions__update">
          

<span tabindex="-1" id="ember5172" class="artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view" data-test-send-message-hover-trigger="">
    <button aria-describedby="artdeco-hoverable-artdeco-gen-77" id="ember5173" class="artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view profile-item-actions__item" data-test-component="message-icon-btn" data-live-test-component="message-icon-btn" type="button">  <li-icon aria-hidden="true" type="envelope-icon" class="artdeco-button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
      <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 2v2l-8 5.24L4 8V6h16zM4 18V9l7.32 4.78a1.25 1.25 0 001.37 0L20 9v9H4z"></path>
    </svg></li-icon>

<span class="artdeco-button__text">
    Message Hazem
</span></button>
  <div id="artdeco-gen-77" class="ember-view"><div id="ember5175" class="ember-view"></div></div>
</span>
          <div>
            
<div id="ember5177" class="artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view more-actions" data-test-more-actions="">
  <button aria-expanded="false" id="3-more-actions-trigger" class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--2 artdeco-button--muted artdeco-button--circle artdeco-button--tertiary more-actions__trigger" data-test-more-actions-trigger="" type="button" tabindex="0">
    <span class="a11y-text">More actions</span>
    <li-icon aria-hidden="true" type="ellipsis-horizontal-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
      <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z"></path>
    </svg></li-icon>
  
<!----></button>
  <div tabindex="-1" aria-hidden="true" id="ember5179" class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view more-actions__dropdown-content" data-test-more-actions-content=""><!----></div>
</div>
          </div>
        </div>                           
                                        
<!---->    
      
        <li id="ember4549" class="ember-view profile-list__occlusion-area profile-list__border-bottom">
<!---->  </li>

<!---->    
      
        <li id="ember4550" class="ember-view profile-list__occlusion-area profile-list__border-bottom">
<!---->  </li>

<!---->    
      
        <li id="ember4551" class="ember-view profile-list__occlusion-area profile-list__border-bottom">
<!---->  </li>

        
    
  
                    <!---->
                    <!---->
                  
  
                    <!---->
                    <!---->
                  


    

    
  
                    <!---->
                    <!---->
                  
  
                    <!---->
                      <section class="ember-view">
    
<!---->                    
  </section>

                  

  
    
  </ol>
`

type ConversationEntry = {
  role: 'human' | 'assistant';
  text: string;
};

const conversation: ConversationEntry[] = [
  // {
  //   role: 'human',
  //   text: prompt1,
  // },
  {
    role: 'human',
    text:  prompt2,
  },
];

console.log(conversation);

function formatConversation(conversation: ConversationEntry[]) {
  return conversation
    .map((entry) => `\n\n${entry.role.charAt(0).toUpperCase() + entry.role.slice(1)}: ${entry.text}`)
    .join('');
}

async function getCompletion(prompt: string) {
  const data = {
    prompt: `\n\n${prompt}\n\nAssistant:`,
    model: 'claude-2', // claude-instant-v1, claude-v1-100k
    max_tokens_to_sample: 300,
    stop_sequences: ['\nHuman:'],
  };

  const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY,
  };

  try {
    const response = await axios.post(BASE_URL, data, { headers });
    console.log(response.data.completion);
  } catch (error: any) {
    console.error('Error:', error.response.data);
  }
}

getCompletion(formatConversation(conversation));