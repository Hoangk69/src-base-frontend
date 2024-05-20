import * as moment from 'moment';
import { ECalendarValue, IDatePickerConfig } from 'ng2-date-picker';
import { environment } from 'src/environments/environment';

export class Constants {
  public static PAGESIZES: number[] = [20, 50, 100];
  public static PAGESIZE_DEFAULT = Constants.PAGESIZES[0];
  public static ROLES_ADMIN = 'admin';
  public static IMAGE_FILE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
  ];
  public static REPORT_TYPE_STAUSES = {
    active: 1,
    deactivate: 0,
  };

  public static FORMAT_DATE = 'YYYY/MM/DD';
  public static FORMAT_DATE_TIME_EXPORT = 'YYYY/MM/DD/HH/mm/ss';
  public static FORMAT_DATE_TIME_DOWNLOAD = 'YYYYMMDDHHmmss';
  public static FORMAT_DATE_JA = 'YYYY年MM月DD日';
  public static FORMAT_TIME = 'HH:mm';
  public static FORMAT_DATE_TIME = 'YYYY/MM/DD HH:mm:ss';

  public static BG_DATE_PICKER_CONFIG = {
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'YYYY/MM/DD',
    locale: 'ja',
    showWeekNumbers: false,
  };

  public static DATE_MIN_MAX_PICKER_CONFIG = {
    singleDatePicker: true,
    showDropdowns: true,
    locale: {
      format: 'YYYY/MM/DD',
      daysOfWeek: ['日', '月', '火', '水', '木', '金', '土'],
      monthNames: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      // cancelLabel: "閉じる",
      // applyLabel : "Ok",
    },
    showWeekNumbers: false,
    autoApply: true,
    firstCalendarDay: 1,
    placeholder: '日付の選択',
    minDate: moment().subtract(35, 'day').format(Constants.FORMAT_DATE),
    maxDate: moment().format(Constants.FORMAT_DATE),
  };

  public static FORMAT_MONTH = 'YYYY/MM';
  public static MONTH_PICKER_CONFIG: IDatePickerConfig = {
    firstDayOfWeek: 'su',
    monthFormat: 'YYYY/MM',
    format: 'YYYY/MM',
    disableKeypress: true,
    allowMultiSelect: false,
    closeOnSelect: undefined,
    closeOnSelectDelay: 100,
    openOnFocus: true,
    openOnClick: true,
    onOpenDelay: 0,
    closeOnEnter: true,
    weekDayFormat: 'ddd',
    appendTo: document.body,
    showNearMonthDays: true,
    showWeekNumbers: false,
    enableMonthSelector: true,
    yearFormat: 'YYYY',
    showGoToCurrent: true,
    dayBtnFormat: 'DD',
    monthBtnFormat: 'MM',
    hours12Format: 'hh',
    hours24Format: 'HH',
    meridiemFormat: 'A',
    minutesFormat: 'mm',
    minutesInterval: 1,
    secondsFormat: 'ss',
    secondsInterval: 1,
    showSeconds: false,
    showTwentyFourHours: false,
    timeSeparator: ':',
    multipleYearsNavigateBy: 10,
    showMultipleYearsNavigation: false,
    locale: moment.locale(),
    hideInputContainer: false,
    returnedValueType: ECalendarValue.String,
    unSelectOnClick: true,
    hideOnOutsideClick: true,
    numOfMonthRows: 3,
    min: moment().subtract(13, 'month').format('YYYY/MM'),
    max: moment().format('YYYY/MM'),
  };

  public static TYPE_SUCCESS = 'success';
  public static TYPE_SETTING_EXIST = 'SETTING_EXIST';
  public static TYPE_ERROR = 'error';

  public static code = {
    NOT_FOUND: 'NOT_FOUND',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    UNAUTHORIZED: 'UNAUTHORIZED',
    FORBIDDEN: 'FORBIDDEN',
    BAD_REQUEST: 'BAD_REQUEST',
    AUTH_FAILED: 'AUTH_FAILED',
    OLD_PASSWORD_IS_CORRECT: 'OLD_PASSWORD_IS_CORRECT',
  };

  public static LIST_ROLE = {
    ADMIN: 'admin',
    GROUP_MANAGER: 'groupmanager',
    PARENT_STORE_MANAGER: 'parent_store_manager',
    PARENT_STORE_STAFF_IMPORT: 'parent_store_staff_import',
    PARENT_STORE_STAFF_STOCK: 'parent_store_staff_stock',
    PARENT_STORE_STAFF_DELIVERY: 'parent_store_staff_delivery',
  };

  public static LIST_ROLE_ACCESS = [
    Constants.LIST_ROLE.ADMIN,
    Constants.LIST_ROLE.GROUP_MANAGER,
    Constants.LIST_ROLE.PARENT_STORE_MANAGER,
    Constants.LIST_ROLE.PARENT_STORE_STAFF_IMPORT,
    Constants.LIST_ROLE.PARENT_STORE_STAFF_STOCK,
  ];

  public static LIST_ROLE_PARENT = [
    Constants.LIST_ROLE.PARENT_STORE_MANAGER,
    Constants.LIST_ROLE.PARENT_STORE_STAFF_IMPORT,
    Constants.LIST_ROLE.PARENT_STORE_STAFF_STOCK,
  ];

  public static List_Location = [
    { label: 'オフィス', value: 'オフィス' },
    { label: '事務所', value: '事務所' },
    { label: '工場', value: '工場' },
    { label: '研究所', value: '研究所' },
    { label: '物流施設', value: '物流施設' },
    { label: 'レンタルオフィス', value: 'レンタルオフィス' },
    { label: '病院', value: '病院' },
    { label: '食堂', value: '食堂' },
    { label: '休憩施設', value: '休憩施設' },
    { label: '介護施設', value: '介護施設' },
    { label: 'スタジオ', value: 'スタジオ' },
    { label: '会計センター', value: '会計センター' },
    { label: '学校', value: '学校' },
    { label: '保育所', value: '保育所' },
    { label: 'ホテル', value: 'ホテル' },
    { label: '警察署', value: '警察署' },
    { label: '消防署', value: '消防署' },
    { label: '公共施設', value: '公共施設' },
    { label: 'その他', value: 'その他' },
  ];

  public static OPTIONS_COMBOX_STORE: {
    ALL: 1;
    REMOVED_ETERNAL: 2;
  };

  public static OPTIONS_MESSAGE_STORE: {
    ALL_STORE: 0;
    CHILD_STORE: 1;
    CSV_CHILD_STORE: 2;
  };

  public static OPTIONS_DIRECTIVE_PRODUCT_STORE = {
    ALL_STORE: '0',
    SELECT_STORE: '1',
  };
  public static OPTIONS_MESSAGE_READ = {
    UNREAD: 0,
    READ: 1,
  };
  public static MAX_RECORD_PER_REQUEST = 9000;
  public static DEFAULT_SELECTED_AREA = { value: 8, label: 'その他' };
  public static TYPE_IMAGE = {
    LOGO_DEFAULT: 0,
    LOGO_ALLIANCE: 1,
    LOGO_CHILD_STORE: 2,
  };
  public static ACCEPT_UPLOAD_IMG = ['jpg', 'png', 'jpeg'];
  public static MAX_SIZE_LOGO = 250000;
  public static TYPE_ALLIANCE = { MNS: 1, SHARE_POS: 2, SHARE_PRODUCT: 3 };
  public static ACCESS_CAMPAIGN = environment.campaign_alliances;
}
