'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pizza-fresh-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-8e79da7b7a47f7b8c4bc66c566e1d57c038ed728184216863ad48618fd73f1eb0c8674d4f09a95d90e09e13e9de4de2e5c01826daa60fc6b28aca667fedc2dd5"' : 'data-target="#xs-controllers-links-module-AppModule-8e79da7b7a47f7b8c4bc66c566e1d57c038ed728184216863ad48618fd73f1eb0c8674d4f09a95d90e09e13e9de4de2e5c01826daa60fc6b28aca667fedc2dd5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8e79da7b7a47f7b8c4bc66c566e1d57c038ed728184216863ad48618fd73f1eb0c8674d4f09a95d90e09e13e9de4de2e5c01826daa60fc6b28aca667fedc2dd5"' :
                                            'id="xs-controllers-links-module-AppModule-8e79da7b7a47f7b8c4bc66c566e1d57c038ed728184216863ad48618fd73f1eb0c8674d4f09a95d90e09e13e9de4de2e5c01826daa60fc6b28aca667fedc2dd5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-8e79da7b7a47f7b8c4bc66c566e1d57c038ed728184216863ad48618fd73f1eb0c8674d4f09a95d90e09e13e9de4de2e5c01826daa60fc6b28aca667fedc2dd5"' : 'data-target="#xs-injectables-links-module-AppModule-8e79da7b7a47f7b8c4bc66c566e1d57c038ed728184216863ad48618fd73f1eb0c8674d4f09a95d90e09e13e9de4de2e5c01826daa60fc6b28aca667fedc2dd5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8e79da7b7a47f7b8c4bc66c566e1d57c038ed728184216863ad48618fd73f1eb0c8674d4f09a95d90e09e13e9de4de2e5c01826daa60fc6b28aca667fedc2dd5"' :
                                        'id="xs-injectables-links-module-AppModule-8e79da7b7a47f7b8c4bc66c566e1d57c038ed728184216863ad48618fd73f1eb0c8674d4f09a95d90e09e13e9de4de2e5c01826daa60fc6b28aca667fedc2dd5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-f850921a52a0324b5964ba9277f6de2029b42151f0c7ea65fa43338969bb3cd41794a0b0c305bb0338fdc08417b58b5c874d1ac12c511bc8834cc27bc8910a0a"' : 'data-target="#xs-controllers-links-module-AuthModule-f850921a52a0324b5964ba9277f6de2029b42151f0c7ea65fa43338969bb3cd41794a0b0c305bb0338fdc08417b58b5c874d1ac12c511bc8834cc27bc8910a0a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-f850921a52a0324b5964ba9277f6de2029b42151f0c7ea65fa43338969bb3cd41794a0b0c305bb0338fdc08417b58b5c874d1ac12c511bc8834cc27bc8910a0a"' :
                                            'id="xs-controllers-links-module-AuthModule-f850921a52a0324b5964ba9277f6de2029b42151f0c7ea65fa43338969bb3cd41794a0b0c305bb0338fdc08417b58b5c874d1ac12c511bc8834cc27bc8910a0a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-f850921a52a0324b5964ba9277f6de2029b42151f0c7ea65fa43338969bb3cd41794a0b0c305bb0338fdc08417b58b5c874d1ac12c511bc8834cc27bc8910a0a"' : 'data-target="#xs-injectables-links-module-AuthModule-f850921a52a0324b5964ba9277f6de2029b42151f0c7ea65fa43338969bb3cd41794a0b0c305bb0338fdc08417b58b5c874d1ac12c511bc8834cc27bc8910a0a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f850921a52a0324b5964ba9277f6de2029b42151f0c7ea65fa43338969bb3cd41794a0b0c305bb0338fdc08417b58b5c874d1ac12c511bc8834cc27bc8910a0a"' :
                                        'id="xs-injectables-links-module-AuthModule-f850921a52a0324b5964ba9277f6de2029b42151f0c7ea65fa43338969bb3cd41794a0b0c305bb0338fdc08417b58b5c874d1ac12c511bc8834cc27bc8910a0a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-8064bcc74144f9bac1d558bb2f2b0f185796824b9af9f55fe864836b910833bf18839c8a0ea036480f1d364c0efcc6a738c9c0b6d33892cb6b49991f206a4759"' : 'data-target="#xs-controllers-links-module-OrderModule-8064bcc74144f9bac1d558bb2f2b0f185796824b9af9f55fe864836b910833bf18839c8a0ea036480f1d364c0efcc6a738c9c0b6d33892cb6b49991f206a4759"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-8064bcc74144f9bac1d558bb2f2b0f185796824b9af9f55fe864836b910833bf18839c8a0ea036480f1d364c0efcc6a738c9c0b6d33892cb6b49991f206a4759"' :
                                            'id="xs-controllers-links-module-OrderModule-8064bcc74144f9bac1d558bb2f2b0f185796824b9af9f55fe864836b910833bf18839c8a0ea036480f1d364c0efcc6a738c9c0b6d33892cb6b49991f206a4759"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-8064bcc74144f9bac1d558bb2f2b0f185796824b9af9f55fe864836b910833bf18839c8a0ea036480f1d364c0efcc6a738c9c0b6d33892cb6b49991f206a4759"' : 'data-target="#xs-injectables-links-module-OrderModule-8064bcc74144f9bac1d558bb2f2b0f185796824b9af9f55fe864836b910833bf18839c8a0ea036480f1d364c0efcc6a738c9c0b6d33892cb6b49991f206a4759"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-8064bcc74144f9bac1d558bb2f2b0f185796824b9af9f55fe864836b910833bf18839c8a0ea036480f1d364c0efcc6a738c9c0b6d33892cb6b49991f206a4759"' :
                                        'id="xs-injectables-links-module-OrderModule-8064bcc74144f9bac1d558bb2f2b0f185796824b9af9f55fe864836b910833bf18839c8a0ea036480f1d364c0efcc6a738c9c0b6d33892cb6b49991f206a4759"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-964015ff5814c9168c658b603c29895f23375fe203adbb09b15ce012600209d3ef06052075d3bd82708e8a287eabfeb2ea417ed2ca745970bdf0e5e86c6ba724"' : 'data-target="#xs-controllers-links-module-ProductModule-964015ff5814c9168c658b603c29895f23375fe203adbb09b15ce012600209d3ef06052075d3bd82708e8a287eabfeb2ea417ed2ca745970bdf0e5e86c6ba724"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-964015ff5814c9168c658b603c29895f23375fe203adbb09b15ce012600209d3ef06052075d3bd82708e8a287eabfeb2ea417ed2ca745970bdf0e5e86c6ba724"' :
                                            'id="xs-controllers-links-module-ProductModule-964015ff5814c9168c658b603c29895f23375fe203adbb09b15ce012600209d3ef06052075d3bd82708e8a287eabfeb2ea417ed2ca745970bdf0e5e86c6ba724"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-964015ff5814c9168c658b603c29895f23375fe203adbb09b15ce012600209d3ef06052075d3bd82708e8a287eabfeb2ea417ed2ca745970bdf0e5e86c6ba724"' : 'data-target="#xs-injectables-links-module-ProductModule-964015ff5814c9168c658b603c29895f23375fe203adbb09b15ce012600209d3ef06052075d3bd82708e8a287eabfeb2ea417ed2ca745970bdf0e5e86c6ba724"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-964015ff5814c9168c658b603c29895f23375fe203adbb09b15ce012600209d3ef06052075d3bd82708e8a287eabfeb2ea417ed2ca745970bdf0e5e86c6ba724"' :
                                        'id="xs-injectables-links-module-ProductModule-964015ff5814c9168c658b603c29895f23375fe203adbb09b15ce012600209d3ef06052075d3bd82708e8a287eabfeb2ea417ed2ca745970bdf0e5e86c6ba724"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TableModule-c3a223d4887e752cb0f45cb6e653a0b10d6a0d35fadeab6bc8ef2279201efa3f20ccb5bae7366d0e78fc98ae319982d832deab76368d7c261af45fe107d78e58"' : 'data-target="#xs-controllers-links-module-TableModule-c3a223d4887e752cb0f45cb6e653a0b10d6a0d35fadeab6bc8ef2279201efa3f20ccb5bae7366d0e78fc98ae319982d832deab76368d7c261af45fe107d78e58"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-c3a223d4887e752cb0f45cb6e653a0b10d6a0d35fadeab6bc8ef2279201efa3f20ccb5bae7366d0e78fc98ae319982d832deab76368d7c261af45fe107d78e58"' :
                                            'id="xs-controllers-links-module-TableModule-c3a223d4887e752cb0f45cb6e653a0b10d6a0d35fadeab6bc8ef2279201efa3f20ccb5bae7366d0e78fc98ae319982d832deab76368d7c261af45fe107d78e58"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-c3a223d4887e752cb0f45cb6e653a0b10d6a0d35fadeab6bc8ef2279201efa3f20ccb5bae7366d0e78fc98ae319982d832deab76368d7c261af45fe107d78e58"' : 'data-target="#xs-injectables-links-module-TableModule-c3a223d4887e752cb0f45cb6e653a0b10d6a0d35fadeab6bc8ef2279201efa3f20ccb5bae7366d0e78fc98ae319982d832deab76368d7c261af45fe107d78e58"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-c3a223d4887e752cb0f45cb6e653a0b10d6a0d35fadeab6bc8ef2279201efa3f20ccb5bae7366d0e78fc98ae319982d832deab76368d7c261af45fe107d78e58"' :
                                        'id="xs-injectables-links-module-TableModule-c3a223d4887e752cb0f45cb6e653a0b10d6a0d35fadeab6bc8ef2279201efa3f20ccb5bae7366d0e78fc98ae319982d832deab76368d7c261af45fe107d78e58"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-b7f658468f3c4e88426190434477ec45de7d01ef5fa49655ec50f0b43fa0e25abdd0f44c0d9df683bf1219b960258cc79f6750e95294a33c36875e4f93e1c751"' : 'data-target="#xs-controllers-links-module-UserModule-b7f658468f3c4e88426190434477ec45de7d01ef5fa49655ec50f0b43fa0e25abdd0f44c0d9df683bf1219b960258cc79f6750e95294a33c36875e4f93e1c751"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-b7f658468f3c4e88426190434477ec45de7d01ef5fa49655ec50f0b43fa0e25abdd0f44c0d9df683bf1219b960258cc79f6750e95294a33c36875e4f93e1c751"' :
                                            'id="xs-controllers-links-module-UserModule-b7f658468f3c4e88426190434477ec45de7d01ef5fa49655ec50f0b43fa0e25abdd0f44c0d9df683bf1219b960258cc79f6750e95294a33c36875e4f93e1c751"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-b7f658468f3c4e88426190434477ec45de7d01ef5fa49655ec50f0b43fa0e25abdd0f44c0d9df683bf1219b960258cc79f6750e95294a33c36875e4f93e1c751"' : 'data-target="#xs-injectables-links-module-UserModule-b7f658468f3c4e88426190434477ec45de7d01ef5fa49655ec50f0b43fa0e25abdd0f44c0d9df683bf1219b960258cc79f6750e95294a33c36875e4f93e1c751"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-b7f658468f3c4e88426190434477ec45de7d01ef5fa49655ec50f0b43fa0e25abdd0f44c0d9df683bf1219b960258cc79f6750e95294a33c36875e4f93e1c751"' :
                                        'id="xs-injectables-links-module-UserModule-b7f658468f3c4e88426190434477ec45de7d01ef5fa49655ec50f0b43fa0e25abdd0f44c0d9df683bf1219b960258cc79f6750e95294a33c36875e4f93e1c751"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderProductDto.html" data-type="entity-link" >CreateOrderProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTableDto.html" data-type="entity-link" >UpdateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});