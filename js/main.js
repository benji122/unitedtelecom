;(function($) {

    // jQuery Extra ---------------------------------------------------
    $.fn.resizeComplete = function(func, ms) {

        var timer = null;
        this.resize(function() {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(func, ms);
        });
    };

    function ts_is_visible(el) {
        var el_off = el.offset(),
            el_top = el_off.top;

        if ($(window).scrollTop() > el_top - window.innerHeight * 0.9) {
            return true;
        }
    }

    // Theme Functionality  ---------------------------------------------
    var themeCircle = {

        init: function() {

            this.fullwidth();
            this.top_banner();
            this.smoothNav();
            this.sidebar_position();
            this.init_column();
            this.contact_form();
            this.accordion();
            this.headline();
            this.match_height();
            this.back_to_top();
            this.reactiveHeader();
            this.fixed_header();
            this.banner();
            this.animate_images();
            this.menu();
            this.misc();
            this.shop();
            this.flexslider();
            this.nicescroll();
            this.tabs();
			this.team_bio();

            // Delay Init
            setTimeout(this.isotope_gallery, 1000);
        },

        misc: function() {

            var self = this;

            // Preloader
            if ( $('.preloading-screen').find('.images-container').length ) {
                $('body').jpreLoader({
                    splashID: ".preloading-screen",
                    loaderVPos: '70%'
                });
            };

            // Pretty Photo
            $("a[rel^='prettyPhoto']").prettyPhoto({
                social_tools: ''
            });

            // rev_slider
            $('.rev-next').click(function() {
                $('.tp-rightarrow').click();
                return false;
            });

            $('.rev-prev').click(function() {
                $('.tp-leftarrow').click();
                return false;
            });

            // ie_transition
            $('.no-csstransitions .item-con-t1').hover(function() {
                $(this).find('.visible-on-hover').stop().animate({
                    opacity: 1
                }, 400);
            }, function() {
                $(this).find('.visible-on-hover').stop().animate({
                    opacity: 0
                }, 400);
            });

            $('.top-compact, .bottom-compact').each(function() {
                var $this = $(this);

                $this.removeAttr('style');
                var c = $this.find('.z-tab').size();
                $this.find('.z-tab').width(100 / c + '%');
            });

            $('.widget_out_stuff2 .item-con-t1 header h2').each(function() {
                var $this = $(this);
                $this.html($this.text().replace(/(^\w+)/, '<b>$1</b>'));
            });

            // Control Panel
            $('#control-panel select').change(function() {
                window.location.href = $(this).find('option:selected').val();
            });

            // Tweets in footer
            var $tweets = $('#recent-tweets');
            $tweets.flexslider({
                animation: "fade",
                controlNav: false,
                directionNav: false
            });

            $('.prev-t3').click(function() {
                $tweets.flexslider("prev");
            });

            $('.next-t3').click(function() {
                $tweets.flexslider("next");
            });

            // Rev slider nav
            var bullet;
            setTimeout(function() {
                bullet = $('.tp-bullets .bullet');
                if ($('.revslider-nav2 li').size() > 0) {
                    $('.tp-bullets').addClass('nobullets');
                }
                return bullet;
            }, 3000);

            $('.revslider-nav2 li').click(function() {
                var bul_num = $(this).index();
                bullet.eq($(this).index()).click();
            });

            // Mouse touch effect
            var fps_fw = $('.featured-project-slider.full-width'),
                lps_fw = $('.latest_posts_2-container'),
                fps_start, fps_end, lps_start, lps_end;

            fps_fw.mousedown(function(e) {
                fps_start = e.pageX;
                return fps_start;
            });

            fps_fw.mouseup(function(e) {
                if (fps_start - e.pageX < -50) {
                    fps_fw.flexslider('prev');
                } else if (fps_start - e.pageX > 50) {
                    fps_fw.flexslider('next');
                }
            });

            lps_fw.mousedown(function(e) {
                lps_start = e.pageX;
                return lps_start;
            });

            lps_fw.mouseup(function(e) {
                if (lps_start - e.pageX < -50) {
                    lps_fw.flexslider('prev');
                } else if (lps_start - e.pageX > 50) {
                    lps_fw.flexslider('next');
                }
            });

            // Three Plates
            var $plates = $('.three-plates');
            if ($plates.size() > 0) {
                var pl = $plates.find('.plate');
                pl.width(100 / pl.size() + '%');
                $plates.find('.plate:first-child').append('<div class="alpha tran03slinear"></div>');
                $plates.find('.plate:last-child').append('<div class="omega tran03slinear"></div>');
            }

            // Mobile hover
            if ($('.media_for_js').css('z-index') < 767) {
                $('.item-con-t1').click(function() {
                    $(this).find('.visible-on-hover').toggleClass('hover');
                });
            }

            // Scroll to top
            $('.sc-divider-scroll').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');

                return false;
            });

            // Skillbar vertical
            $('.sc-skillbar-vertical .sc-skillbar-bar').each(function() {
                var $this = $(this),
                    per = $this.attr('data-percentage'),
                    color = $this.attr('data-color'),
                    color_style = '';

                if ('' !== color) {
                    color_style = 'background-color: ' + color;
                }
                $this.append('<div style="width: 25px; height: 0px; ' + color_style + '"></div>');
                $this.children('div').delay(1000).animate({
                    'height': per + '%'
                }, per * 30);
            });

            // skills
            $('.member-skills span').each(function() {
                var skill_width = $(this).attr('style').match(/\d+/)[0];
                $(this).width(0).css('opacity', '1').animate({
                    width: skill_width + '%'
                }, 2000);
            });

            // Skillbar
            $('.sc-skillbar .sc-skillbar-bar').data('play', 'false');

            // Counter
            $('.sc-counter').data('play', 'false');
            $('.sc-counter-2').data('play', 'false');

            // Map Container
            $('.sc-map-container').each(function() {
                $(this).find('.wpgmappity_container').height($(this).height());
            });

            // Search icon
            $('#search-icon i').click(function() {
                var $this = $(this);
                if (!$this.is('.active')) {
                    $this.addClass('active');
                    $this.siblings('form').find('input').fadeIn(300).focus();
                }
            });

            $('#search-icon form input').blur(function() {
                $(this).fadeOut(300);
                setTimeout(function() {
                    $('#search-icon i').removeClass('active');
                }, 200);
            });

            $('.widget_left_navigation li .sub-menu').slideUp(0);
            $('.widget_left_navigation .sub-menu').parent('ul').addClass('has-sub-menu');

            // Form shortcode
            $(".sc-form-clear").click(function() {
                $(this).closest('form')[0].reset();
            });

            if ($('.sc-form').length > 0) {

                $.extend($.validator.messages, {
                    required: $('.sc-form').attr('data-required'),
                    email: $('.sc-form').attr('data-email')
                });

                $('.sc-form').validate();
            }

            // POST LIKES
            $('.likes').click(function() {

                var $this = $(this),
                    post_id = $this.attr('data-post-id');

                //end if clicked or cookie exists
                if ($this.hasClass('clicked') || document.cookie.indexOf('saved_post_like_' + post_id) != -1) {
                    return;
                }

                $this.html(parseInt($this.html()) + 1);
                $this.addClass('clicked');

                $.ajax({
                    type: 'GET',
                    url: ajaxurl,
                    data: {
                        action: 'save_post_like',
                        post_id: post_id
                    },
                    success: function(data, textStatus, XMLHttpRequest) {
                        $this.html(data);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert(errorThrown);
                    }
                });
            });

            // Message
            $('.close', '.sc-message').click(function() {
                var $this = $(this);
                $this.parent('.sc-message').animate({
                    opacity: 0
                }, 300).animate({
                    height: 0
                }, 200, function() {
                    $this.parent('.sc-message').remove();
                });
            });

            // Arrow Indicator
            var $arrow = $('.arrow-indicator');
            if ($arrow.length) {
                $arrow.each(function() {
                    var $this = $(this);
                    $this.prependTo($this.parents('.wpb_column'));
                    $this.on('inview', function(event, visible) {
                        if (visible) {
                            setTimeout(function() {
                                $this.addClass('is-visible');
                            }, 100);
                        }
                    });
                });
            }

            // Circle Counter
            $('.circle-counter').circleProgress({
                startAngle: -Math.PI / 6 * 3,
                size: 125,
                thickness: 6,
                fill: {
                    gradient: ["#5d85b8", "#6ae2e7"]
                }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.percentage > span').text(String(stepValue.toFixed(2)).substr(1) * 100);
            });

            // Owl Carousel
            $('.carousel').each(function() {
                var $this = $(this);
                $this.imagesLoaded(function() {
                    $this.owlCarousel({
                        items: $this.data('items') || 3,
                        loop: $this.data('loop')
                    });
                })
            });

            // Testimonials Carousel()
            $('.testimonials-carousel').each(function() {
                var $this = $(this);

                $this.find('.carousel-items').owlCarousel({
                    items: 1,
                    singleItem: true,
                    loop: true,
                    nav: true,
                    animateIn: 'fadeInUp',
                    animateOut: 'zoomOut',
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    navContainer: $this.find('.top-sec').find('.nav')
                });
            });

            // HeaderStyle8
            var $header8 = $('.headerstyle8').find('.page-header');
            if ($header8.length) {
                $header8.imagesLoaded(function() {
                    $header8.midnight();
                });
            }

            // WINDOW EVENTS --------------------------------------------------

            $(window).resizeComplete(function() {

                self.flexslider();
                self.video_bg();

                if (self.image_loaded) {
                    setTimeout(self.item_container_1, 100);
                }
            }, 400);

            $(window).load(function() {

                setTimeout(self.item_container_1, 100);

                // Gmap
                $('.wpgmappity_container').parent('div').width('100%');

                self.flexslider();
                self.video_bg();

                // Hero Text
                var $hero_text = $('.hero-text');
                if ($hero_text.length) {
                    $hero_text.fitText(1);

                    $hero_text.parallax({
                        limitX: false,
                        limitY: 0
                    });
                }

                setTimeout(function() {
                    $('.preloading-screen').fadeOut(1000);
                }, 800);

                self.skills_animation();
            });

            $(window).scroll(function() {
                self.round_counter();
                self.skills_animation();
            });
        },

		team_bio: function() {
			var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

			//open team-member bio
			$('.team-member.style2').on('click', function(event){
				event.preventDefault();
				var selected_member = $(this).data('id'),
					$body = $('body');

				$body.append('<div class="cd-overlay"></div><a href="#0" class="cd-member-bio-close">Close</a> <!-- close the author bio section -->');

				$('.cd-member-bio.'+selected_member+'').addClass('slide-in');
				$('.cd-member-bio-close').addClass('is-visible');
				$('.cd-overlay').addClass('is-visible');

				// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
				if( is_firefox ) {
					$('.wrapper').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$body.addClass('overflow-hidden');
					});
				} else {
					$('.wrapper').addClass('slide-out');
					$body.addClass('overflow-hidden');
				}
			});

			//close team-member bio
			$(document).on('click', '.cd-overlay, .cd-member-bio-close', function(event){
				event.preventDefault();

				var $body = $('body');
				$('.cd-member-bio').removeClass('slide-in');
				$('.cd-member-bio-close').remove();
				$('.cd-overlay').remove();

				if( is_firefox ) {
					$('.wrapper').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$body.removeClass('overflow-hidden');
					});
				} else {
					$('.wrapper').removeClass('slide-out');
					$body.removeClass('overflow-hidden');
				}
			});
		},

        // Fullwidth functions
        fullwidth: function() {

            var self = this;

            // Enables Full Width Sections
            self.init_fullwidth();
            self.stretch_to_sides();
            $(window).on('load resize', function() {
                self.init_fullwidth();
                self.stretch_to_sides();
            });

            if ($('body').hasClass('not-responsive')) {
                $('#responsiveness-css').remove();
            }
        },

        // Initializes Fullwidth Sections
        init_fullwidth: function() {
            $('.full-width').each(function() {
                var element = $(this),
                    element_x;

                // Reset Styles
                element.css('margin-left', '');
                element.css('width', '');

                // Set New Styles
                element.css('margin-left', -element.offset().left + 'px');
                element.css('width', $(window).width() + 'px');

            });
        },

        stretch_to_sides: function() {
            var el = $('.stretch-to-side');

            el.each(function() {
                var $this = $(this),
                    offset;

                $this.css({'margin-left': '', 'margin-right': '', 'width': ''});

                if ($this.hasClass('to-left')) {
                    $this.css('margin-left', $this.offset().left * -1);

                    if ($this.hasClass('wpb_column')) {
                        $this.css({
                            'margin-left': $this.offset().left * -1,
                            'width': $this.width() + $this.offset().left + 30
                        });
                    }
                } else if ($this.hasClass('to-right')) {
                    $this.css('margin-right', ($(window).width() - $this.offset().left - $this.width()) * -1);

                    if ($this.hasClass('wpb_column')) {
                        $this.css({
                            'margin-right': ($(window).width() - $this.offset().left - $this.width() + 200) * -1,
                            'width': $this.width() + ($(window).width() - $this.offset().left  - $this.width()) + 60
                        });
                    }
                }
            });
        },

        // Top Banner
        top_banner: function() {

            // Move slider content into slider
            $sliderContent = $('.top-slider-content');
            if ($sliderContent.length > 0) {
                $sliderContent.each(function() {
                    var $this = $(this);

					$this.wrapInner('<div class="container" />');
                    $('.top-slider').append($this);
                });
            }

            if ($('.top-slider .rev_slider').size() > 0) {
                var rev_id = $('.top-slider .rev_slider').attr('id');

                rev_id = rev_id.replace('rev_slider_', '');
                rev_id = rev_id.replace('_2', '');

                var revapi_id = eval('revapi' + rev_id);
                //var revapi_id = 'revapi' + rev_id;

                revapi_id.bind("revolution.slide.onloaded", function(e) {

                    $('.top-slider').animate({
                        height: $('.rev_slider').height()
                    }, 300, function() {
                        $('.top-slider').height('auto');
                    });
                });
            }

            if ($('.banner-builder').size() > 0) {
                setTimeout(function() {
                    $('.top-slider').animate({
                            height: $('.banner-builder').height()
                        }, 700,
                        function() {
                            $('.top-slider').height('auto');
                        });
                }, 1000);
            }
        },

        // Sidebar Position
        sidebar_position: function() {
            if ($('.media_for_js').css('z-index') < 767) {
                $('aside.left-sidebar').insertAfter('.post-area');
            } else {
                $('aside.left-sidebar').insertBefore('.post-area');
            }
        },

        init_column: function() {

            var self = this,
                $column_post_media = $('.column_post-media'),
                $column = $('.template-blog-3 .column');

            $column_post_media.css('height', $column_post_media.width() * 0.5);
            $column_post_media.find('iframe').css('height', $column_post_media.width() * 0.5);
            $column.isotope({
                itemSelector: '.column_post'
            });

            $(window).resizeComplete(function() {
                var $column_post_media = $('.column_post-media'),
                    $column = $('.template-blog-3 .column');

                $column_post_media.css('height', $column_post_media.width() * 0.5);
                $column_post_media.find('iframe').css('height', $column_post_media.width() * 0.5);
                $column.isotope({
                    itemSelector: '.column_post'
                });

                self.sidebar_position();


                $('.gallery-container .gallery .item-con-t1').each(function() {
                    $(this).css({
                        'margin-bottom': $(this).css('margin-right')
                    });
                });

                self.isotope_gallery();
            }, 500);
        },

        contact_form: function() {

            var inputs = $('.input-field input, .input-field textarea');

            inputs.focus(function() {
                $(this).parents('.input-field').addClass('focus');
            }).blur(function() {
                $(this).parents('.input-field').removeClass('focus');
            });

            $('#searchform input[type=text]').focus(function() {
                $(this).parents('form').addClass('focus');
            }).blur(function() {
                $(this).parents('form').removeClass('focus');
            });

            $('.wysija-input').focus(function() {
                $(this).addClass('focus');
            }).blur(function() {
                $(this).removeClass('focus');
            });
        },

        accordion: function() {

            $('.widget_accordion .button, .widget_accordion header').click(function() {

                var $this = $(this),
                    $item = $this.parents('.item');

                if (!$item.hasClass('active')) {
                    if ($this.parents('.widget_accordion').is('.accordion_style3')) {
                        $this.parents('.accordion_style3').find('.item-container').slideUp(500);
                        $this.parents('.accordion_style3').find('.item').removeClass('active');
                    }
                    $this.parent().find('.item-container').slideDown(500);
                    $item.addClass('active');
                    $this.find('span:first').fadeOut(300);
                } else {
                    $this.parent().find('.item-container').slideUp(500);
                    $item.removeClass('active');
                    $this.find('span:first').fadeIn(300);
                }
            });
        },

        headline: function() {

            var summar_width = 0,
                links = $('.page-header .menu>li>a, .page-header .menu>ul>li>a'),
                menu_height = links.size() * 44;

            links.each(function() {
                summar_width += $(this).width() + 65;
            });

            $('#menu-btn').click(function() {
                var $menu = $('.menu');

                if ($menu.height() > 0) {
                    $menu.animate({
                        height: 0
                    }, 300).removeClass('opened');
                } else {
                    $menu.animate({
                        height: menu_height
                    }, 300, function() {
                        $(this).removeAttr('style').addClass('opened');
                    });
                }

                return false;
            });
        },

        item_container_1: function() {

            var self = this,
                cont_i = 500;

            self.image_loaded = false;

            $('.gallery-container .gallery > article, .item-con-t1, .z-tabs').each(function() {
                var cont = $(this),
                    sp = (cont.is('.trans03linear') || cont.is('.isotope-item')) ? 0 : 500;

                setTimeout(function() {
                    cont.animate({
                        opacity: 1
                    }, sp);
                }, cont_i);
                cont_i += 100;
            });

            self.image_loaded = true;
        },

        match_height: function() {

            // Latest work
            var $el = $('.latest-works, .latest-posts, .team-members, .post-nav');
            if ($el.length) {
                $el.find('.row').imagesLoaded().progress(function() {
                    $el.find('.row').each(function() {
                        $(this).children('[class*=grid_]:not(.grid_sizer)').matchHeight();
                    });
                });
            }
        },

        isotope_gallery: function() {

            var $gallery = $('.gallery-container .gallery'),
                $optionSets = $('.gallery-filters li'),
                $optionLinks = $optionSets.find('a');

            $gallery.imagesLoaded().progress(function() {
                $gallery.css('display', 'block');
                $gallery.isotope({
                    itemSelector: '.item-con-t1'
                });

                $optionLinks.click(function() {

                    var $this = $(this),
                        selector = $this.attr('data-filter');

                    if ($this.hasClass('selected')) {
                        return false;
                    }

                    $optionSets.find('.selected').removeClass('selected');
                    $this.addClass('selected');
                    $gallery.isotope({
                        filter: selector
                    });
                    return false;
                });
            });

            var latestWorks = $('.latest-works .row, .latest-posts .row'),
                latestWorksGrid = latestWorks.imagesLoaded().progress(function() {

                    latestWorks.isotope({
                        layoutMode: 'packery',
                        itemSelector: '[class*=grid_]:not(.grid_sizer)',
                        percentPosition: true,
                        stamp: '.stamp',
                        packery: {
                            columnWidth: '.grid_sizer',
                            gutter: 0
                        }
                    });
                });

            $('.gallery-filters').on('click', 'a', function(e) {
                e.preventDefault();
                var $this = $(this),
                    filterValue = $this.attr('data-filter');

                $this.parent().find('.active').removeClass('active').end().siblings().find('.active').removeClass('active');
                $this.addClass('active');
                latestWorksGrid.isotope({
                    filter: filterValue
                });
            });

            var masonryGrid = $('.masonry-grid');
            masonryGrid.imagesLoaded().progress(function() {
                masonryGrid.isotope({
                    layoutMode: 'packery',
                    itemSelector: '[class*=grid_]:not(.grid_sizer)',
                    packery: {
                        gutter: 30
                    }
                });
            });
        },

        back_to_top: function() {
            var $el = $('#back_to_top');

            $el.fadeOut(300);

            $(window).load().scroll(function() {
                if ($(window).scrollTop() > 100) {
                    $el.fadeIn(300);
                } else {
                    $el.fadeOut(300);
                }
            });

            $el.click(function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });
        },

        reactiveHeader: function() {



            /*
                By Osvaldas Valutis, www.osvaldas.info
                Available for use under the MIT License
            */

            
            ;( function ( document, window, index )
            {
                'use strict';

                var elSelector  = '.headerstyle8 .page-header',
                    element     = document.querySelector( elSelector );

                if( !element ) return true;

                var elHeight        = 0,
                    elTop           = 0,
                    dHeight         = 0,
                    wHeight         = 0,
                    wScrollCurrent  = 0,
                    wScrollBefore   = 0,
                    wScrollDiff     = 0;

                window.addEventListener( 'scroll', function()
                {
                    elHeight        = element.offsetHeight;
                    dHeight         = document.body.offsetHeight;
                    wHeight         = window.innerHeight;
                    wScrollCurrent  = window.pageYOffset;
                    wScrollDiff     = wScrollBefore - wScrollCurrent;
                    elTop           = parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

                    if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
                        element.style.top = '0px';

                    else if( wScrollDiff > 0 ) // scrolled up; element slides in
                        element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';

                    else if( wScrollDiff < 0 ) // scrolled down
                    {
                        if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
                            element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';

                        else // scrolled down; element slides out
                            element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
                    }

                    wScrollBefore = wScrollCurrent;
                });

            }( document, window, 0 ));
        },

        fixed_header: function() {

            var logo = $('.headerstyle2 .logo img, .headerstyle4 .logo img'),
                body = $('body');

            if (logo.size() > 0) {

                logo.attr('id', 'logo');

                logo.imagesLoaded(function() {
                    logo.height(document.getElementById('logo').naturalHeight).css('opacity', '1');
                });
            }

            if (body.hasClass('sticky-menu-on') && $('.media_for_js').css('z-index') > 767) {

                if ($('.media_for_js').css('z-index') > 767) {

                    $(window).on('scroll load', function() {
                        var st;

                        if (body.hasClass('headerstyle7') && $('.top-slider').length > 0) {
                            st = $('.top-slider').height();
                        } else if (body.hasClass('headerstyle2')) {

                            if ($('.preheader').size() > 0) {
                                st = $('.preheader').height();
                            } else {
                                st = 50 + 45;
                            }
                        } else if (body.hasClass('headerstyle4')) {
                            st = 50 + 45;
                        } else if (body.hasClass('headerstyle5')) {
                            st = 35 + 45;
                        } else {
                            st = 100 + 45;
                        }

                        if ($(window).scrollTop() > st) {
                            body.addClass('fixed-header');
                            $('.page-header .menu-bg').addClass('fixed');
                        } else {
                            body.removeClass('fixed-header');
                            $('.page-header .menu-bg').removeClass('fixed');
                        }
                    });
                }
            }
        },

        banner: function() {
            if ($('.banner-wrapper').size() > 0) {
                var banner = $('.banner-wrapper');

                setTimeout(function() {
                    banner.find('#canvasLoader').hide();
                    banner.find('.banner-overlay').animate({
                        opacity: 0
                    }, 500);
                }, 4000);


                var cl = new CanvasLoader('canvasloader-container');
                cl.setColor('#2aa3cf'); // default is '#000000'
                cl.setShape('spiral'); // default is 'oval'
                cl.setDiameter(48); // default is 40
                cl.setDensity(99); // default is 40
                cl.setRange(1.2); // default is 1.3
                cl.setSpeed(4);
                cl.setFPS(43); // default is 24
                cl.show(); // Hidden by default
            }
        },

        animate_images: function() {
            var anim_elem = $('.animated'),
                gn = 1,
                anim_block;

            if (anim_elem.size() > 0) {

                anim_elem.each(function() {

                    var el_scr = $(this).offset();

                    if ($('.group1').size() > 0) {
                        var prev_el = $('.group' + (gn - 1)).offset();
                        prev_el_top = prev_el.top;
                    } else {
                        prev_el_top = 0;
                    }

                    if (el_scr.top == prev_el_top) {
                        $(this).addClass('group' + (gn - 1));
                    } else {
                        $(this).addClass('group' + gn);
                        gn++;
                    }

                    return gn;
                });

                for (var g = 0; g < gn; g++) {

                    var i = 0;
                    $('.group' + g).each(function() {
                        $(this).css({
                            '-webkit-transition-delay': i + 's',
                            '-moz-transition-delay': i + 's',
                            '-o-transition-delay': i + 's',
                            '-ms-transition-delay': i + 's',
                            'transition-delay': i + 's'
                        });

                        i = i + 0.15;
                    });
                }
            }

            function anim_images() {

                anim_elem.each(function() {

                    var block_offset = $(this).offset();

                    if ($(window).scrollTop() + window.innerHeight > block_offset.top + $(this).height() / 2) {
                        $(this).addClass('animation_started');
                        var el = $(this);
                        setTimeout(function() {
                            el.removeAttr('style');
                        }, 3000);
                    }
                });
            }


            $(window).scroll(function() {
                anim_images();
            });

            $(window).load(function() {
                setTimeout(anim_images, 300);
                setTimeout(function() {
                    $('.flexslider').animate({
                        opacity: 1
                    }, 500);
                }, 0);
            });
        },

        menu: function() {

            var $menus = $('.menu li'),
                $btn_menu = $('#menu-btn');

            $menus.each(function() {
                var $this = $(this),
                    $child = $this.children('.sub-menu, .children');

                if ($child.size() > 0) {
                    $this.append('<span class="fa fa-angle-down"></span>').children('a').addClass('has-sub-menu');
                    $child.animate({
                        height: "hide"
                    }, 0);
                }
            });

            $('.menu li .has-sub-menu').siblings('span').click(function() {

                var $this = $(this),
                    $parent = $this.parent('li');

                if ($btn_menu.css('display') == 'inline-block') {
                    if ($parent.hasClass('open')) {
                        $this.siblings('.sub-menu, .children').animate({
                            height: "hide"
                        }, 300);
                        $parent.removeClass('open');
                    } else {
                        $this.siblings('.sub-menu, .children').animate({
                            height: "show"
                        }, 300);
                        $parent.addClass('open');
                    }
                    return false;
                }
            });

            $menus.hover(
                function() {
                    if ($btn_menu.css('display') == 'none') {
                        $(this).children('ul').fadeIn(200);
                    }
                },
                function() {
                    if ($btn_menu.css('display') == 'none') {
                        $(this).children('ul').fadeOut(200);
                    }
                });

            this.megamenu();

            // One Page Menu Scroll
            $('#menu-one-page-menu a').click(function(e) {
                e.preventDefault();

                var target = $(this).attr('href'),
                    offset = ($(target).offset().top) - 42;

                $('body,html').animate({
                    scrollTop: offset + 'px'
                }, 600);
            });

            $('body').on('click', '.nav-trigger', function(event) {
                event.preventDefault();
                var $this = $(this),
                    target = $this.data('target');

                $('body').toggleClass('nav-trigger-active');
                $(target).toggleClass('active');
            });
        },

        megamenu: function() {
            var $megamenu = $('li.mega-menu > .sub-menu');

            $megamenu.each(function() {
                var $this = $(this);

                $this.css({
                    display: 'block',
                    visibility: 'hidden'
                });

                var marg = ($('body').is('.headerstyle2_2')) ? 20 : 0,
                    m_w = $this.children('li').size() * ($this.children('li').width() + marg) + 5,
                    mw_l = -(m_w / 2) + 100;

                $this.css({
                    display: 'none',
                    visibility: 'visible',
                    marginLeft: mw_l
                });

                $this.width(m_w);
            });
        },

        shop: function() {

            $('.product > .button').wrap('<div class="product-bottom"></div>');

            $('.product-bottom').each(function() {
                $(this).append('<a class="product-details" href="' + $(this).parents('.product').children('a').attr('href') + '">Details</a>');
            });

            $('.woocommerce-ordering').append('<span>Sort by</span><span class="icon-angle-down"></span>');
            $('#calc_shipping_country').after('<span class="icon-angle-down"></span>');

            // Cart
            var cart = $('.widget_shopping_cart_content');
            $('.widget_shopping_cart').prepend('<a id="cart_button"></a>');

            cart.stop().animate({
                opacity: 0
            }, 500, function() {
                $(this).hide();
            });

            $('.widget_shopping_cart').hover(function() {
                cart.stop().show().animate({
                    opacity: 1
                }, 500);
            }, function() {
                cart.stop().animate({
                    opacity: 0
                }, 500, function() {
                    $(this).hide();
                });
            });

            var addi;

            function if_added(item) {
                if (item.hasClass('added')) {
                    clearInterval(addi);
                    $('body').append('<div id="added_item"><img src="' + item.parents('.product').find('.attachment-shop_catalog').attr('src') + '" alt=""/><b>"' + item.parents('.product').find('h3').html() + '"</b> was added to the cart. </div>');
                    $('#added_item').fadeIn(500);
                    setTimeout(function() {
                        $('#added_item').animate({
                            opacity: 0,
                            marginTop: 20
                        }, 500, function() {
                            $(this).remove();
                        });
                    }, 2000);
                }
            }

            $('.add_to_cart_button').each(function() {
                var add_btn = $(this);
                $(this).click(function() {
                    addi = setInterval(function() {
                        if_added(add_btn);
                    }, 100);
                });
            });
        },

        flexslider: function() {

            $('.flexslider').each(function() {
                $this = $(this);

                if (!$this.parents().is('.top-slider')) {
                    $this.find('.flex-control-nav').remove();
                    var iCount = 0,
                        scrWidth = $('.media_for_js').css('z-index'),
                        move = 1;

                    if ($this.hasClass('full-width')) {
                        var ml = -($(window).width() - $this.parents('.featured-projects').width()) / 2;
                        $this.css({
                            'margin-left': ml,
                            width: $(window).width()
                        });
                        move = 5;
                        iCount = 5;
                    }

                    if (scrWidth == 479) {
                        iCount = 1;
                    } else if (scrWidth == 767 || scrWidth == 639) {
                        iCount = 2;
                    } else {
                        if ($this.hasClass('widget_our_clients-container')) {
                            iCount = 5;
                        } else if ($this.hasClass('full-width')) {
                            iCount = 5;
                        } else if ($this.hasClass('featured-project-slider')) {
                            iCount = 4;
                        } else {
                            iCount = 3;
                        }
                    }

                    var selector = $this.hasClass('fs-inner') ? '.slides-inner > li' : '.slides > li',
                        slideshow = ($this.hasClass('fs-inner')) ? true : false;

                    if (
                        $this.hasClass('fs-inner') || $this.hasClass('images-slider') ||
                        $this.hasClass('widget_testimonials-container') || $this.parent('div').hasClass('flexslider-testimonials') ||
                        $this.parent('div').hasClass('portfolio-gallery') || $this.parents('article').hasClass('format-gallery') ||
                        $this.parent('section').hasClass('sc-testimonial-slider')
                    ) {
                        iCount = 1;
                    }

                    var animation = $this.is('.gallery-slider') ? 'fade' : 'slide',
                        sync, asnav;

                    if ($this.is('.thumbnail-slider')) {
                        iCount = 5;
                        sync = '#' + $this.siblings('.gallery-slider').attr('id');
                    }

                    if ($this.is('.gallery-slider')) {
                        asnav = '#' + $this.siblings('.thumbnail-slider').attr('id');
                    }

                    var cnav = ($this.hasClass('control-nav')) ? true : false,
                        dnav = ($this.hasClass('direction-nav')) ? true : false;

                    $this.removeData("flexslider").flexslider({
                        animation: animation,
                        selector: selector,
                        animationLoop: true,
                        itemWidth: 200,
                        itemMargin: 0,
                        smoothHeight: true,
                        slideshow: slideshow,
                        controlNav: false,
                        directionNav: true,
                        slideshowSpeed: 7000,
                        minItems: iCount,
                        maxItems: iCount,
                        startAt: 0,
                        sync: sync,
                        asNavFor: asnav,
                        move: move
                    });

                    $this.find('.flex-viewport').each(function() {
                        if ($(this).find(selector).size() === 0) {
                            $(this).addClass('rem').hide();
                        }
                    });

                    setTimeout(function() {
                        $('.flex-viewport.rem').remove();
                    }, 1000);
                }
            });

            $('.thumbnail-slider li').on('mouseenter ', function() {
                $(this).click();
                setTimeout(function() {
                    $(this).click();
                }, 150);
            });
        },

        video_bg: function() {

            var $el = $('.sc-highlight-full-width');

            if ($el.find('video').size() > 0) {

                $el.each(function() {

                    var $this = $(this),
                        v = $this.find('video'),
                        pat = $this.find('.video-pattern');

                    $this.css({
                        'position': 'relative',
                        'overflow': 'hidden'
                    });

                    if (pat.size() > 0) {
                        pat.css({
                            'opacity': 1
                        });
                    }

                    var ml = -($(window).width() - $this.find('.sc-highlight').width()) / 2;

                    v.css({
                        'margin-left': ml,
                        width: $(window).width(),
                        opacity: 1
                    });
                });
            }
        },

        nicescroll: function() {

            var self = this;

            if ($('html').hasClass('csstransitions') && $('body').hasClass('nice-scroll')) {

                var $smoothActive = $('body').attr('data-smooth-scrolling');
                var $smoothCache = ($smoothActive == 1) ? true : false;

                if ($smoothActive == 1 && $(window).width() > 690 && $('body').outerHeight(true) > $(window).height() && Modernizr.csstransforms3d && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
                    self.nicescroll_init();
                } else {
                    $('body').attr('data-smooth-scrolling', '0');
                }

                if ($smoothCache === false && navigator.platform.toUpperCase().indexOf('MAC') === -1 && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && $(window).width() > 690) {
                    ! function() {
                        function e() {
                            var e = !1;
                            e && c("keydown", r), v.keyboardSupport && !e && u("keydown", r)
                        }

                        function t() {
                            if (document.body) {
                                var t = document.body,
                                    n = document.documentElement,
                                    o = window.innerHeight,
                                    r = t.scrollHeight;
                                if (S = document.compatMode.indexOf("CSS") >= 0 ? n : t, w = t, e(), x = !0, top != self) y = !0;
                                else if (r > o && (t.offsetHeight <= o || n.offsetHeight <= o)) {
                                    var a = !1,
                                        i = function() {
                                            a || n.scrollHeight == document.height || (a = !0, setTimeout(function() {
                                                n.style.height = document.height + "px", a = !1
                                            }, 500))
                                        };
                                    if (n.style.height = "auto", setTimeout(i, 10), S.offsetHeight <= o) {
                                        var l = document.createElement("div");
                                        l.style.clear = "both", t.appendChild(l)
                                    }
                                }
                                v.fixedBackground || b || (t.style.backgroundAttachment = "scroll", n.style.backgroundAttachment = "scroll")
                            }
                        }

                        function n(e, t, n, o) {
                            if (o || (o = 1e3), d(t, n), 1 != v.accelerationMax) {
                                var r = +new Date,
                                    a = r - C;
                                if (a < v.accelerationDelta) {
                                    var i = (1 + 30 / a) / 2;
                                    i > 1 && (i = Math.min(i, v.accelerationMax), t *= i, n *= i)
                                }
                                C = +new Date
                            }
                            if (M.push({
                                    x: t,
                                    y: n,
                                    lastX: 0 > t ? .99 : -.99,
                                    lastY: 0 > n ? .99 : -.99,
                                    start: +new Date
                                }), !T) {
                                var l = e === document.body,
                                    u = function() {
                                        for (var r = +new Date, a = 0, i = 0, c = 0; c < M.length; c++) {
                                            var s = M[c],
                                                d = r - s.start,
                                                f = d >= v.animationTime,
                                                h = f ? 1 : d / v.animationTime;
                                            v.pulseAlgorithm && (h = p(h));
                                            var m = s.x * h - s.lastX >> 0,
                                                w = s.y * h - s.lastY >> 0;
                                            a += m, i += w, s.lastX += m, s.lastY += w, f && (M.splice(c, 1), c--)
                                        }
                                        l ? window.scrollBy(a, i) : (a && (e.scrollLeft += a), i && (e.scrollTop += i)), t || n || (M = []), M.length ? N(u, e, o / v.frameRate + 1) : T = !1
                                    };
                                N(u, e, 0), T = !0
                            }
                        }

                        function o(e) {
                            x || t();
                            var o = e.target,
                                r = l(o);
                            if (!r || e.defaultPrevented || s(w, "embed") || s(o, "embed") && /\.pdf/i.test(o.src)) return !0;
                            var a = e.wheelDeltaX || 0,
                                i = e.wheelDeltaY || 0;
                            return a || i || (i = e.wheelDelta || 0), !v.touchpadSupport && f(i) ? !0 : (Math.abs(a) > 1.2 && (a *= v.stepSize / 120), Math.abs(i) > 1.2 && (i *= v.stepSize / 120), n(r, -a, -i), void e.preventDefault())
                        }

                        function r(e) {
                            var t = e.target,
                                o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== H.spacebar;
                            if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || o) return !0;
                            if (s(t, "button") && e.keyCode === H.spacebar) return !0;
                            var r, a = 0,
                                i = 0,
                                u = l(w),
                                c = u.clientHeight;
                            switch (u == document.body && (c = window.innerHeight), e.keyCode) {
                                case H.up:
                                    i = -v.arrowScroll;
                                    break;
                                case H.down:
                                    i = v.arrowScroll;
                                    break;
                                case H.spacebar:
                                    r = e.shiftKey ? 1 : -1, i = -r * c * .9;
                                    break;
                                case H.pageup:
                                    i = .9 * -c;
                                    break;
                                case H.pagedown:
                                    i = .9 * c;
                                    break;
                                case H.home:
                                    i = -u.scrollTop;
                                    break;
                                case H.end:
                                    var d = u.scrollHeight - u.scrollTop - c;
                                    i = d > 0 ? d + 10 : 0;
                                    break;
                                case H.left:
                                    a = -v.arrowScroll;
                                    break;
                                case H.right:
                                    a = v.arrowScroll;
                                    break;
                                default:
                                    return !0
                            }
                            n(u, a, i), e.preventDefault()
                        }

                        function a(e) {
                            w = e.target
                        }

                        function i(e, t) {
                            for (var n = e.length; n--;) E[A(e[n])] = t;
                            return t
                        }

                        function l(e) {
                            var t = [],
                                n = S.scrollHeight;
                            do {
                                var o = E[A(e)];
                                if (o) return i(t, o);
                                if (t.push(e), n === e.scrollHeight) {
                                    if (!y || S.clientHeight + 10 < n) return i(t, document.body)
                                } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return i(t, e)
                            } while (e = e.parentNode)
                        }

                        function u(e, t, n) {
                            window.addEventListener(e, t, n || !1)
                        }

                        function c(e, t, n) {
                            window.removeEventListener(e, t, n || !1)
                        }

                        function s(e, t) {
                            return (e.nodeName || "").toLowerCase() === t.toLowerCase()
                        }

                        function d(e, t) {
                            e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (k.x !== e || k.y !== t) && (k.x = e, k.y = t, M = [], C = 0)
                        }

                        function f(e) {
                            if (e) {
                                e = Math.abs(e), D.push(e), D.shift(), clearTimeout(z);
                                var t = h(D[0], 120) && h(D[1], 120) && h(D[2], 120);
                                return !t
                            }
                        }

                        function h(e, t) {
                            return Math.floor(e / t) == e / t
                        }

                        function m(e) {
                            var t, n, o;
                            return e *= v.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (n = Math.exp(-1), e -= 1, o = 1 - Math.exp(-e), t = n + o * (1 - n)), t * v.pulseNormalize
                        }

                        function p(e) {
                            return e >= 1 ? 1 : 0 >= e ? 0 : (1 == v.pulseNormalize && (v.pulseNormalize /= m(1)), m(e))
                        }
                        var w, g = {
                                frameRate: 150,
                                animationTime: 400,
                                stepSize: 120,
                                pulseAlgorithm: !0,
                                pulseScale: 8,
                                pulseNormalize: 1,
                                accelerationDelta: 20,
                                accelerationMax: 1,
                                keyboardSupport: !0,
                                arrowScroll: 50,
                                touchpadSupport: !0,
                                fixedBackground: !0,
                                excluded: ""
                            },
                            v = g,
                            b = !1,
                            y = !1,
                            k = {
                                x: 0,
                                y: 0
                            },
                            x = !1,
                            S = document.documentElement,
                            D = [120, 120, 120],
                            H = {
                                left: 37,
                                up: 38,
                                right: 39,
                                down: 40,
                                spacebar: 32,
                                pageup: 33,
                                pagedown: 34,
                                end: 35,
                                home: 36
                            },
                            v = g,
                            M = [],
                            T = !1,
                            C = +new Date,
                            E = {};
                        setInterval(function() {
                            E = {}
                        }, 1e4);
                        var z, A = function() {
                                var e = 0;
                                return function(t) {
                                    return t.uniqueID || (t.uniqueID = e++)
                                }
                            }(),
                            N = function() {
                                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, n) {
                                    window.setTimeout(e, n || 1e3 / 60)
                                }
                            }(),
                            K = /chrome/i.test(window.navigator.userAgent),
                            L = null;
                        "onwheel" in document.createElement("div") ? L = "wheel" : "onmousewheel" in document.createElement("div") && (L = "mousewheel"), L && K && (u(L, o), u("mousedown", a), u("load", t))
                    }();
                }
            }
        },

        smoothNav: function() {
            $('.secondary-nav').find('.menu-item').find('a[href*="#"]:not([href="#"])').on('click', function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        },

        nicescroll_init: function() {
            $("html").niceScroll({
                scrollspeed: 60,
                mousescrollstep: 40,
                cursorwidth: 15,
                cursorborder: 0,
                cursorcolor: '#303030',
                cursorborderradius: 6,
                autohidemode: false,
                horizrailenabled: false
            });

            if ($('#boxed').length === 0) {
                $('body, body #header-outer, body #header-secondary-outer, body #search-outer').css('padding-right', '16px');
            } else if ($('body[data-ext-responsive="true"]').length === 0) {
                $('body').css('padding-right', '16px');
            }

            $('html').addClass('no-overflow-y');
        },

        skills_animation: function() {

            $('.sc-skillbar .sc-skillbar-bar').each(function() {
                var $this = $(this);

                if (ts_is_visible($('.sc-skillbar .sc-skillbar-bar')) && $this.data('play') == 'false') {
                    var per = $this.attr('data-percentage'),
                        color = $this.attr('data-color'),
                        color_style = '';


                    if (color !== "") {
                        color_style = 'background-color: ' + color;
                    }

                    var sb_per = ($this.parents('.sc-skillbar').hasClass('sc-skillbar-style-2')) ? '<span></span>' : '';

                    $this.append('<div style="width: 0; ' + color_style + '">' + sb_per + '</div>');
                    var bar = $this.children('div');

                    setTimeout(function() {
                        bar.css('opacity', '1');
                    }, 0);

                    bar.animate({
                        "width": per + "%"
                    }, {
                        step: function(val) {
                            $this.find('span').html(parseInt(val) + 1 + '%');
                        },
                        duration: per * 30
                    });

                    $this.data('play', 'true');
                }
            });
        },

        round_counter: function() {

            $('.sc-counter, .sc-counter-2').each(function() {
                var $this = $(this);

                if (ts_is_visible($this) && $this.data('play') == 'false') {
                    var qh = $this.find('.sc-quantity'),
                        q = qh.attr('data-quantity'),
                        i = 0,
                        timer = setInterval(function() {
                            qh.html(i);
                            i++;
                            if (i > q) {
                                clearInterval(timer);
                            }
                        }, 10);

                    $this.data('play', 'true');
                }
            });
        },

        tabs: function() {

            var Tab = function(element) {
                this.element = $(element);
            };

            Tab.VERSION = '3.3.5';

            Tab.TRANSITION_DURATION = 600;

            Tab.prototype.show = function() {
                var jQuerythis = this.element;
                var jQueryul = jQuerythis.closest('ul:not(.dropdown-menu)');
                var selector = jQuerythis.data('target');

                if (!selector) {
                    selector = jQuerythis.attr('href');
                    selector = selector && selector.replace(/.*(?=#[^\s]*jQuery)/, ''); // strip for ie7
                }

                if (jQuerythis.parent('li').hasClass('active')) {
                    return;
                }

                var jQueryprevious = jQueryul.find('.active:last a'),
                    hideEvent = $.Event('hide.bs.tab', {
                        relatedTarget: jQuerythis[0]
                    }),
                    showEvent = $.Event('show.bs.tab', {
                        relatedTarget: jQueryprevious[0]
                    });

                jQueryprevious.trigger(hideEvent);
                jQuerythis.trigger(showEvent);

                if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
                    return;
                }

                var jQuerytarget = $(selector);

                this.activate(jQuerythis.closest('li'), jQueryul);
                this.activate(jQuerytarget, jQuerytarget.parent(), function() {
                    jQueryprevious.trigger({
                        type: 'hidden.bs.tab',
                        relatedTarget: jQuerythis[0]
                    });
                    jQuerythis.trigger({
                        type: 'shown.bs.tab',
                        relatedTarget: jQueryprevious[0]
                    });
                });
            };

            Tab.prototype.activate = function(element, container, callback) {
                var jQueryactive = container.find('> .active'),
                    transition = callback && jQuery.support.transition && (jQueryactive.length && jQueryactive.hasClass('fade') || !!container.find('> .fade').length);

                function next() {
                    jQueryactive.removeClass('active')
                        .find('> .dropdown-menu > .active')
                        .removeClass('active')
                        .end()
                        .find('[data-toggle="tab"]')
                        .attr('aria-expanded', false);

                    element.addClass('active')
                        .find('[data-toggle="tab"]')
                        .attr('aria-expanded', true);

                    if (transition) {
                        element[0].offsetWidth; // reflow for transition
                        element.addClass('in');

                        if (element.find('.animated-on').length) {
                            element.find('.animated-on').each(function() {
                                $(this).css({
                                    '-webkit-animation-delay': $(this).data('animate-delay'),
                                    'animation-delay': $(this).data('animate-delay')
                                });
                            });
                            element.find('.animated-on').addClass('animated');
                        }
                    } else {
                        element.removeClass('fade');
                    }

                    if (element.parent('.dropdown-menu').length) {
                        element.closest('li.dropdown')
                            .addClass('active')
                            .end()
                            .find('[data-toggle="tab"]')
                            .attr('aria-expanded', true);
                    }

                    callback && callback();
                }

                jQueryactive.length && transition ? jQueryactive.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next()

                jQueryactive.removeClass('in');
                if (jQueryactive.find('.animated-on').length) {
                    jQueryactive.find('.animated-on').removeClass('animated');
                }
            };

            // TAB PLUGIN DEFINITION
            // =====================

            function Plugin(option) {
                return this.each(function() {
                    var jQuerythis = $(this),
                        data = jQuerythis.data('bs.tab');

                    if (!data) {
                        jQuerythis.data('bs.tab', (data = new Tab(this)));
                    }
                    if (typeof option == 'string') {
                        data[option]();
                    }
                });
            }

            var old = $.fn.tab;
            $.fn.tab = Plugin;
            $.fn.tab.Constructor = Tab;

            // TAB NO CONFLICT
            // ===============
            $.fn.tab.noConflict = function() {
                $.fn.tab = old;
                return this;
            };

            // TAB DATA-API
            // ============
            var clickHandler = function(e) {
                e.preventDefault();
                Plugin.call($(this), 'show');
            };

            $(document)
                .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
                .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);

            function transitionEnd() {
                var el = document.createElement('bootstrap');

                var transEndEventNames = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                };

                for (var name in transEndEventNames) {
                    if (el.style[name] !== undefined) {
                        return {
                            end: transEndEventNames[name]
                        };
                    }
                }

                return false; // explicit for ie8 (  ._.)
            }

            // http://blog.alexmaccaw.com/css-transitions
            $.fn.emulateTransitionEnd = function(duration) {
                var called = false,
                    jQueryel = this;

                $(this).one('bsTransitionEnd', function() {
                    called = true;
                });
                var callback = function() {
                    if (!called) {
                        $(jQueryel).trigger($.support.transition.end);
                    }
                };
                setTimeout(callback, duration);
                return this;
            };

            $(function() {
                $.support.transition = transitionEnd();

                if (!$.support.transition) {
                    return;
                }

                $.event.special.bsTransitionEnd = {
                    bindType: $.support.transition.end,
                    delegateType: $.support.transition.end,
                    handle: function(e) {
                        if ($(e.target).is(this)) {
                            return e.handleObj.handler.apply(this, arguments);
                        }
                    }
                };
            });

            $('.tab-nav').find('li').find('a').on('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).tab('show');
            });
        }
    };

    $(document).ready(function() {

        themeCircle.init();
    });

})(jQuery);

// Grayscale w canvas method
function grayscale(src) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imgObj = new Image();
    imgObj.src = src;
    canvas.width = imgObj.width;
    canvas.height = imgObj.height;
    ctx.drawImage(imgObj, 0, 0);
    var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (var y = 0; y < imgPixels.height; y++) {
        for (var x = 0; x < imgPixels.width; x++) {
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg;
            imgPixels.data[i + 1] = avg;
            imgPixels.data[i + 2] = avg;
        }
    }
    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
}
